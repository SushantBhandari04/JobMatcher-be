import express from "express"
import { prisma } from "./db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { formatUserProfile } from "./embed-jobs";
import { getEmbedding } from "./cohere";
import { jobIndex } from "./pinecone";
import { auth } from "./auth";
import { z } from "zod";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "https://job-match-fe-omega.vercel.app",
    credentials: true,
  }),
);

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
      };
    }
  }
}

const JWT_SECRET = process.env.JWT_SECRET || "123";

app.get("/", (req, res) => {
  res.send("Hello World!"); 
}
);

app.post("/signup", async (req, res) => {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
        res.json({
            message: "Invalid inputs"
        })
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    try {
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name
            }
        })
        res.json({
            id: user.id
        })

    } catch {
        res.status(411).json({
            message: "User already exists."
        })
    }

    res.json({
        message: "Signed up successfully",
    })
})

app.post("/signin", async (req, res) => {

    const { email, password } = req.body
    if (!email || !password) {
        res.json({
            message: "Invalid inputs"
        })
        return;
    }

    const user = await prisma.user.findFirst({
        where: {
            email
        }
    })

    if (!user) {
        res.status(403).json({
            message: "User does not exist."
        })
        return;
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
        res.status(403).json({
            message: "Incorrect password."
        })
        return;
    }

    const token = jwt.sign({
        userId: user.id
    }, JWT_SECRET);

    res.json({
        token,
        user: {
            id: user.id,
            email: user.email,
            name: user.name
        }
    })
})

const profileSchema = z.object({
    title: z.string().min(2),
    location: z.string().min(2),
    yearsOfExperience: z.number().min(0),
    experienceLevel: z.string(),
    bio: z.string().min(10),
    skills: z.array(z.string()).min(1),
    preferredJobTypes: z.array(z.string()).min(1),
    remotePreference: z.string(),
});

app.post('/profile/create', auth, async (req, res) => {
    try {
        // Assume authentication middleware sets req.user
        const userId = req.user?.id;

        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }

        // Validate incoming request body
        const parsed = profileSchema.safeParse(req.body);

        if (!parsed.success) {
            res.status(400).json({ error: parsed.error.errors });
            return
        }

        const {
            title,
            location,
            yearsOfExperience,
            experienceLevel,
            bio,
            skills,
            preferredJobTypes,
            remotePreference,
        } = parsed.data;

        const newProfile = await prisma.userProfile.create({
            data: {
                userId,
                title,
                location,
                yearsOfExperience,
                experienceLevel,
                bio,
                skills,
                preferredJobTypes,
                remotePreference,
            },
        });

        console.log('Profile created:', newProfile);

        res.status(201).json(newProfile);
    } catch (error) {
        console.error('Error creating profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Create a partial schema for optional updates
const updateProfileSchema = profileSchema.partial();

app.put('/profile/update', auth, async (req, res) => {
    try {
        const userId = req.user?.id;

        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }

        // Validate only provided fields
        const parsed = updateProfileSchema.safeParse(req.body);

        if (!parsed.success) {
            res.status(400).json({ error: parsed.error.errors });
            return;
        }

        const updateData = parsed.data;

        // Check if profile exists
        const existingProfile = await prisma.userProfile.findUnique({
            where: { userId },
        });

        if (!existingProfile) {
            res.status(404).json({ error: 'Profile not found' });
            return
        }

        // Update only provided fields
        const updatedProfile = await prisma.userProfile.update({
            where: { userId },
            data: updateData,
        });

        console.log('Profile updated:', updatedProfile);
        res.status(200).json(updatedProfile);
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.get('/profile', auth, async (req, res) => {
    try {
        const userId = req.user?.id;

        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }

        const profile = await prisma.userProfile.findFirst({
            where: { userId },
        });

        if (!profile) {
            res.json({ message: 'Profile not found' });
            return
        }

        console.log('Profile fetched:', profile);

        res.json(profile);
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get("/job-matches", auth, async (req, res) => {
    try {
        const userId = req.user?.id;

        if (!userId) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }

        // Step 1: Fetch the user profile from DB
        const profile = await prisma.userProfile.findFirst({
            where: { userId },
        });

        if (!profile) {
            res.status(404).json({ error: "Profile not found" });
            return;
        }

        const text = formatUserProfile(profile);
        const embedding = await getEmbedding(text);

        const result = await jobIndex.query({
            vector: embedding,
            topK: 3,
            includeMetadata: true,
        });

        const matches = result.matches?.map((match) => ({
            id: match.id,
            score: match.score,
            ...match.metadata,
        })) ?? [];

        res.json({ matches });
    } catch (err) {
        console.error("Job matching error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/jobs", async (req, res) => {
    const jobs = await prisma.job.findMany();

    res.json(jobs)
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});