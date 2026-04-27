# 项目开发规范

## 模块说明

| 模块 | 路径 | 说明 |
|------|------|------|
| 插件端 | `packages/extension/` | VS Code 扩展后端 |
| 前端 | `packages/gui/` | Vue 3 前端界面 |

## 文件命名规范

### 插件端 (`packages/extension/`)

| 文件类型 | 命名风格 | 示例 |
|----------|----------|------|
| 非源代码（配置、清单等） | kebab-case | `eslint.config.js`、`package.json` |
| 导出的接口/类/类型 | PascalCase | `LightMateConfig.ts`、`IContribution.ts` |
| 其他源代码 | lowerCamelCase | `configManager.ts`、`getSettings.ts` |

### 前端 (`packages/gui/`)

遵循 Vue 3 官方推荐的项目规范。

## 代码风格与注释规范

1. **注释原则：极简**
   - 默认**不添加任何注释**，依靠清晰的命名和类型定义表达意图。
   - 仅在以下情况使用英文注释（**禁止中文注释**）：
     - 复杂且无法通过命名自解释的业务逻辑算法。
     - 导出的类/接口中，无法通过类型和属性名直观理解的属性或方法。
2. **类型优先**：优先使用 TypeScript 类型推断，显式类型声明仅在推断不明或导出接口时使用。


## 开发流程与记忆管理（重要）

### 1. 接口与类型同步
- **新增/修改接口时**：必须同步更新对应文档，不可遗漏：
  - 插件接口 → [api-doc.extension.md](../technical/api-doc.extension.md)
  - 前端接口 → [api-doc.frontend.md](../technical/api-doc.frontend.md)
- **类型定义存放**：
  - 插件端核心类型 → `packages/extension/src/types/`
  - 前端共享类型 → `packages/gui/src/types/`（跨组件共享的类型必须提取到此）

### 2. 任务执行闭环
执行 [tasks](./tasks/) 文件夹下的任务时，必须完成以下闭环动作：

| 任务文件 | 必须生成的结果文件 |
|----------|-------------------|
| `01-task.md` | `01-result.md` |
| `02-task.md` | `02-result.md` |

**结果文件内容要求**：必须包含：① 实际执行步骤 ② 遇到的问题及解决方案 ③ 最终结果确认。

**结构联动更新**：如果任务执行导致项目结构、功能、技术栈发生变化，必须主动更新 [proj-info.md](./proj-info.md) 对应章节，不可遗漏。

### 3. 持久化记忆机制 (`memory.md`)
- **写入时机**：当你发现某个上下文信息、决策原因、踩坑经验值得在后续会话中复用时，立即追加到 [memory.md](./memory.md)。
- **清理时机**：当你发现 `memory.md` 中的内容与当前代码现状矛盾或已失效时，主动清理过时条目。
- **禁止冗余**：不要将代码本身大段拷贝到 memory 中，只记录结论和索引。

