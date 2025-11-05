import OpenAI from 'openai';

const BASE_URL = 'https://integrate.api.nvidia.com/v1';
const MODEL_NAME = 'moonshotai/kimi-k2-instruct-0905';

let cachedClient: { apiKey: string; client: OpenAI } | undefined;

export function getOpenAIClient(apiKey: string) {
  if (!cachedClient || cachedClient.apiKey !== apiKey) {
    cachedClient = {
      apiKey,
      client: new OpenAI({
        apiKey,
        baseURL: BASE_URL,
      }),
    };
  }

  return cachedClient.client;
}

export function getModelName() {
  return MODEL_NAME;
}
