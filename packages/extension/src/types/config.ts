export type LLMProvider = "openai" | "anthropic" | "ollama";
export type Currency = "$" | "￥" | "€";

export interface ModelDisplay {
    id: string;
    provider: LLMProvider;
    name: string;
}

export interface ModelConfig {
    id: string;
    provider: LLMProvider;
    model: string;
    /** Model display name */
    name?: string;
    api_key?: string;
    base_url?: string;
    /** Custom system prompt */
    system_prompt?: string;
    /** Model context window size, in thousands of Tokens */
    context_window?: number;
    /** Model price, the four parameters in order are: 
     *  input price, cache hit input price, output price, price unit per million Tokens 
     *  Example: [3.0, 0.3, 15.0, "$"] means $3/M input, $0.3/M cache, $15/M output
     */
    price?: [number, number, number, Currency];
    /** Custom model invocation parameters, which will be injected into the model invocation */
    custom_params?: Record<string, unknown>;
}

export interface ExtensionConfig {
    "$schema": string;
    models: ModelConfig[];
}
