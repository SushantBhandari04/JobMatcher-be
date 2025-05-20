import { Pinecone } from "@pinecone-database/pinecone";

export const pinecone = new Pinecone({
  apiKey: `${process.env.PINECONE_API_KEY}`,
});

export const jobIndex = pinecone.index(`${process.env.PINECONE_INDEX_NAME}`);