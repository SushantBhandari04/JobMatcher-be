import { getEmbedding } from "./cohere";
import { getJobs } from "./jobs";
import { jobIndex } from "./pinecone";

const jobsPromise = getJobs();

export type UserProfile = {
    title: string;
    location: string;
    yearsOfExperience: number;
    experienceLevel: string;
    bio: string;
    remotePreference: string;
    skills: string[];
    preferredJobTypes: string[];
};

export function formatUserProfile(profile: UserProfile): string {
    return `
Title: ${profile.title}
Location: ${profile.location}
Years of Experience: ${profile.yearsOfExperience}
Experience Level: ${profile.experienceLevel}
Remote Preference: ${profile.remotePreference}
Skills: ${profile.skills.join(", ")}
Preferred Job Types: ${profile.preferredJobTypes.join(", ")}
Bio: ${profile.bio}
`.trim();
}


export function formatJobToText(job: any): string {
    return `
    ${job.title}
    Company: ${job.company}
    Location: ${job.location}
    Type: ${job.type} (${job.remote ? "Remote" : job.hybrid ? "Hybrid" : "Onsite"})
    Experience: ${job.experience}
    Description: ${job.description}
    Responsibilities: ${job.responsibilities.join(", ")}
    Requirements: ${job.requirements.join(", ")}
    Skills: ${job.skills.join(", ")}
  `.trim();
}


export async function embedAndStoreMultipleJobs() {
    const jobs = await jobsPromise;
    const vectors = await Promise.all(
        jobs.map(async (job: any) => {
            const text = formatJobToText(job);
            const embedding = await getEmbedding(text);
            //   console.log(`Embedding : ${embedding}`);

            return {
                id: String(job.id),
                values: embedding,
                metadata: {
                    title: job.title,
                    company: job.company,
                    location: job.location,
                    type: job.type,
                    experience: job.experience,
                    remote: job.remote,
                    hybrid: job.hybrid,
                    skills: job.skills,
                },
            };
        })
    );

    await jobIndex.upsert(vectors);
    console.log(`✅ ${vectors.length} jobs embedded and uploaded to Pinecone.`);
}

embedAndStoreMultipleJobs();