import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: `${process.env.COHERE_API_KEY}`,
});

export async function getEmbedding(text: string): Promise<number[]> {
  const response = await cohere.v2.embed({
    texts: [text],
    model: "embed-v4.0",
    inputType: "search_document",
    embeddingTypes: ["float"],
  });

  return response.embeddings?.float?.[0] || [];
}
