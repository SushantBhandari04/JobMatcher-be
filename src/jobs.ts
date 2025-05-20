import { prisma } from "./db";

export async function getJobs(){
 const jobs = await prisma.job.findMany();
  return jobs;
}