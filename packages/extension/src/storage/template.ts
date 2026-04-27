export const configFileTemplate = {
  "$schema": "config-schema.json",
  "models": []
};

export const configSchemaFileTemplate = {
  "en": {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "ConfigFile",
    "description": "Schema for the LightMate config file",
    "type": "object",
    "properties": {
      "$schema": {
        "description": "The JSON schema reference URI",
        "type": "string",
        "default": "config-schema.json"
      },
      "models": {
        "description": "A list of LLM model configurations",
        "type": "array",
        "items": {
          "type": "object",
          "title": "ModelConfig",
          "description": "Configuration for a specific LLM model",
          "required": [
            "id",
            "provider",
            "model"
          ],
          "properties": {
            "id": {
              "description": "The unique identifier for the model configuration",
              "type": "string"
            },
            "provider": {
              "description": "The LLM provider type",
              "type": "string",
              "enum": [
                "openai",
                "anthropic",
                "ollama"
              ]
            },
            "model": {
              "description": "The model identifier used by the provider (e.g., gpt-4o, glm-5)",
              "type": "string"
            },
            "name": {
              "description": "Model display name",
              "type": "string"
            },
            "api_key": {
              "description": "The API key required to access the model provider",
              "type": "string"
            },
            "base_url": {
              "description": "The custom base URL for the provider API endpoint",
              "type": "string"
            },
            "system_prompt": {
              "description": "Custom system prompt injected into the model invocation",
              "type": "string"
            },
            "context_window": {
              "description": "Model context window size, in thousands of Tokens",
              "type": "number",
              "minimum": 0
            },
            "price": {
              "description": "Model price, the four parameters in order are: input price, cache hit input price, output price, price unit per million Tokens",
              "type": "array",
              "items": [
                {
                  "description": "Input price",
                  "type": "number",
                  "minimum": 0
                },
                {
                  "description": "Cache hit input price",
                  "type": "number",
                  "minimum": 0
                },
                {
                  "description": "Output price",
                  "type": "number",
                  "minimum": 0
                },
                {
                  "description": "Price unit per million Tokens",
                  "type": "string",
                  "enum": [
                    "$",
                    "￥",
                    "€"
                  ]
                }
              ],
              "minItems": 4,
              "maxItems": 4
            },
            "custom_params": {
              "description": "Custom model invocation parameters, which will be injected into the model invocation",
              "type": "object",
              "additionalProperties": true
            }
          },
          "additionalProperties": false
        }
      }
    },
    "required": [
      "$schema",
      "models"
    ],
    "additionalProperties": false
  },
  "zh-cn": {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "配置文件",
    "description": "LightMate 配置文件的 Schema",
    "type": "object",
    "properties": {
      "$schema": {
        "description": "JSON Schema 引用的 URI",
        "type": "string",
        "default": "config-schema.json"
      },
      "models": {
        "description": "LLM 模型配置列表",
        "type": "array",
        "items": {
          "type": "object",
          "title": "模型配置",
          "description": "特定 LLM 模型的配置",
          "required": [
            "id",
            "provider",
            "model"
          ],
          "properties": {
            "id": {
              "description": "模型配置的唯一标识符",
              "type": "string"
            },
            "provider": {
              "description": "LLM 提供商类型",
              "type": "string",
              "enum": [
                "openai",
                "anthropic",
                "ollama"
              ]
            },
            "model": {
              "description": "提供商使用的模型标识符（如 gpt-4o、glm-5）",
              "type": "string"
            },
            "name": {
              "description": "模型显示名称",
              "type": "string"
            },
            "api_key": {
              "description": "访问模型提供商所需的 API 密钥",
              "type": "string"
            },
            "base_url": {
              "description": "提供商 API 端点的自定义基础 URL",
              "type": "string"
            },
            "system_prompt": {
              "description": "注入到模型调用中的自定义系统提示词",
              "type": "string"
            },
            "context_window": {
              "description": "模型上下文窗口大小，单位为千 Token",
              "type": "number",
              "minimum": 0
            },
            "price": {
              "description": "模型价格，四个参数依次为：输入价格、缓存命中输入价格、输出价格、每百万 Token 的价格单位",
              "type": "array",
              "items": [
                {
                  "description": "输入价格",
                  "type": "number",
                  "minimum": 0
                },
                {
                  "description": "缓存命中输入价格",
                  "type": "number",
                  "minimum": 0
                },
                {
                  "description": "输出价格",
                  "type": "number",
                  "minimum": 0
                },
                {
                  "description": "每百万 Token 的价格单位",
                  "type": "string",
                  "enum": [
                    "$",
                    "￥",
                    "€"
                  ]
                }
              ],
              "minItems": 4,
              "maxItems": 4
            },
            "custom_params": {
              "description": "自定义模型调用参数，将被注入到模型调用中",
              "type": "object",
              "additionalProperties": true
            }
          },
          "additionalProperties": false
        }
      }
    },
    "required": [
      "$schema",
      "models"
    ],
    "additionalProperties": false
  }
};
