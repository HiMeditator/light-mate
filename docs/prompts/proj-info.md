# 项目信息

Light Mate 是一款面向 VS Code 的轻量级大模型智能体插件，主打的优势区间是用更小的 Token 消耗完成轻量级任务。

项目结构需要尽可能清晰和简单，插件主要面向轻度使用 Agent 的场景。

## 技术栈

- 项目管理范式：monorepo (pnpm workspace)
- 包管理工具：pnpm 10.7.0
- 插件开发：VS Code API
- 插件前端：Vue3 + Vite

## 项目命令

```bash
# Install dependencies
pnpm install

# Development (run both in parallel)
pnpm dev                    # Start GUI dev server (Vue + Vite)
pnpm watch                  # Watch mode for extension (webpack)

# Build
pnpm build                  # Build GUI (vue-tsc + vite)

# Package VSIX
pnpm package
```

## 项目结构树

（随着项目更新，项目结构可能会有变化）

```
light-mate/
├── packages/
│   ├── extension/          # VS Code 插件后端
│   │   └── src/
│   │       ├── core/       # 核心模块
│   │       │   ├── api/    # API 接口（配置、消息发送、请求处理）
│   │       │   ├── data/   # 数据（扩展路径、全局上下文）
│   │       │   ├── init/   # 初始化（模块注册、命令、监听器、视图）
│   │       │   └── views/  # 视图（ChatViewProvider）
│   │       ├── storage/    # 存储（ConfigManager、模板）
│   │       ├── types/      # 类型定义
│   │       └── utils/       # 工具（localization 多语言）
│   │
│   └── gui/                 # 插件前端 (Vue3)
│       └── src/
│           ├── api/        # 与后端通信（listener、sender、vscode）
│           └── main.ts     # 前端入口
│
├── docs/
│   ├── prompts/            # AI 提示词文档
│   └── technical/          # 技术接口文档
│
└── assets/                 # 静态资源
```


## 开发进度

### 后端 (packages/extension/)

已完成插件基本结构搭建：

- ✅ 多语言适配 [localization.ts](packages/extension/src/utils/localization.ts)
- ✅ 前后端通信 [core/api/](packages/extension/src/core/api/)
- ✅ 插件设置管理 [Configuration.ts](packages/extension/src/core/api/Configuration.ts)
- ✅ 配置文件管理 [ConfigManager.ts](packages/extension/src/storage/ConfigManager.ts)
- ✅ 插件侧边栏视图 [ChatViewProvider.ts](packages/extension/src/core/views/ChatViewProvider.ts)
- ✅ 插件生命周期 [extension.ts](packages/extension/src/extension.ts)
- ✅ 扩展路径管理 [ExtensionPath.ts](packages/extension/src/core/data/ExtensionPath.ts)
- ✅ 全局上下文管理 [GlobalContext.ts](packages/extension/src/core/data/GlobalContext.ts)
- ✅ 消息发送 [MessageSender.ts](packages/extension/src/core/api/MessageSender.ts)
- ✅ 命令注册 [registerCommands.ts](packages/extension/src/core/init/registerCommands.ts)

### 前端 (packages/gui/)

已完成通信接口，提供手动发送指令的输入框。

## 接口文档

- 插件接口文档 [api-doc.extension.md](../technical/api-doc.extension.md)：插件发送给前端的数据清单与格式约定
- 前端接口文档 [api-doc.frontend.md](../technical/api-doc.frontend.md)：前端发送给插件的数据清单与格式约定
- 类型定义 [types/](packages/extension/src/types/)：重要类型的定义
