import { formatStreamPart } from 'ai';
import type {
  ChatCompletionChunk,
  ChatCompletionMessageParam,
  ChatCompletionToolChoiceOption,
} from 'openai/resources/chat/completions';
import { getAPIKey } from '~/lib/.server/llm/api-key';
import { getModelName, getOpenAIClient } from '~/lib/.server/llm/model';
import { MAX_TOKENS } from './constants';
import { getSystemPrompt } from './prompts';

interface ToolResult<Name extends string, Args, Result> {
  toolCallId: string;
  toolName: Name;
  args: Args;
  result: Result;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  toolInvocations?: ToolResult<string, unknown, unknown>[];
}

export type Messages = Message[];

type FinishReason =
  | 'stop'
  | 'length'
  | 'content-filter'
  | 'tool-calls'
  | 'error'
  | 'other'
  | 'unknown';

export interface StreamingOptions {
  temperature?: number;
  topP?: number;
  toolChoice?: ChatCompletionToolChoiceOption;
  onFinish?: (result: { text: string; finishReason: FinishReason }) => void | Promise<void>;
}

const encoder = new TextEncoder();

export async function streamText(messages: Messages, env: Env, options: StreamingOptions = {}) {
  const client = getOpenAIClient(getAPIKey(env));

  const openAIMessages: ChatCompletionMessageParam[] = [
    { role: 'system', content: getSystemPrompt() },
    ...convertMessages(messages),
  ];

  const response = await client.chat.completions.create({
    model: getModelName(),
    messages: openAIMessages,
    max_tokens: MAX_TOKENS,
    temperature: options.temperature ?? 0,
    top_p: options.topP ?? 0.9,
    stream: true,
    stream_options: { include_usage: true },
    tool_choice: options.toolChoice,
  });

  return new OpenAIStreamTextResult(response, options.onFinish);
}

class OpenAIStreamTextResult {
  private consumed = false;

  constructor(
    private readonly response: AsyncIterable<ChatCompletionChunk>,
    private readonly onFinish?: StreamingOptions['onFinish'],
  ) {}

  toAIStream() {
    if (this.consumed) {
      throw new Error('Stream has already been consumed.');
    }

    this.consumed = true;

    return new ReadableStream<Uint8Array>({
      start: async (controller) => {
        let aggregatedText = '';
        let finishReason: string | null = null;
        let usage: { promptTokens: number; completionTokens: number } | null = null;

        try {
          for await (const chunk of this.response) {
            const choice = chunk.choices[0];

            if (!choice) {
              continue;
            }

            const textDelta = extractDeltaText(choice.delta);

            if (textDelta.length > 0) {
              aggregatedText += textDelta;
              controller.enqueue(encoder.encode(formatStreamPart('text', textDelta)));
            }

            if (choice.finish_reason) {
              finishReason = choice.finish_reason;
            }

            if (chunk.usage) {
              usage = {
                promptTokens: chunk.usage.prompt_tokens ?? 0,
                completionTokens: chunk.usage.completion_tokens ?? 0,
              };
            }
          }

          const normalizedFinishReason = normalizeFinishReason(finishReason);
          const usagePayload =
            usage ?? {
              promptTokens: 0,
              completionTokens: 0,
            };

          controller.enqueue(
            encoder.encode(
              formatStreamPart('finish_message', {
                finishReason: normalizedFinishReason,
                usage: usagePayload,
              }),
            ),
          );

          if (this.onFinish) {
            await this.onFinish({
              text: aggregatedText,
              finishReason: normalizedFinishReason,
            });
          }

          controller.close();
        } catch (error) {
          const message = error instanceof Error ? error.message : 'Unknown error';
          controller.enqueue(encoder.encode(formatStreamPart('error', JSON.stringify(message))));
          controller.error(error);
        }
      },
    });
  }
}

function convertMessages(messages: Messages): ChatCompletionMessageParam[] {
  return messages.map((message) => ({
    role: message.role,
    content: message.content,
  }));
}

function extractDeltaText(
  delta: ChatCompletionChunk['choices'][number]['delta'],
): string {
  const content = delta?.content;

  if (!content) {
    return '';
  }

  if (typeof content === 'string') {
    return content;
  }

  if (Array.isArray(content)) {
    return (content as Array<string | Record<string, unknown>>)
      .map((part) => {
        if (typeof part === 'string') {
          return part;
        }

        if (isTextPart(part)) {
          return part.text;
        }

        return '';
      })
      .join('');
  }

  return '';
}

function normalizeFinishReason(finishReason: string | null): FinishReason {
  switch (finishReason) {
    case 'stop':
      return 'stop';
    case 'length':
      return 'length';
    case 'content_filter':
      return 'content-filter';
    case 'tool_calls':
    case 'function_call':
      return 'tool-calls';
    case 'error':
      return 'error';
    case null:
    case undefined:
      return 'unknown';
    default:
      return 'other';
  }
}

function isTextPart(part: Record<string, unknown>): part is { text: string } {
  return typeof part.text === 'string';
}
