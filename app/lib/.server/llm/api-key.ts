import { env } from 'node:process';

export function getAPIKey(cloudflareEnv: Env) {
  /**
   * The `cloudflareEnv` is only used when deployed or when previewing locally.
   * In development the environment variables are available through `env`.
   */
  const apiKey =
    env.NVIDIA_API_KEY ||
    cloudflareEnv.NVIDIA_API_KEY ||
    env.ANTHROPIC_API_KEY ||
    cloudflareEnv.ANTHROPIC_API_KEY;

  if (!apiKey) {
    throw new Error('Missing NVIDIA_API_KEY environment variable');
  }

  return apiKey;
}
