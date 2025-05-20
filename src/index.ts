import express from "express"
import { prisma } from "./db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const app = express();
app.use(express.json());

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

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});