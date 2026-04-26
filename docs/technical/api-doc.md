## 说明

前端和插件通过 vscode 提供的接口进行通信。

在插件端通过 [MessageSender.ts](../../packages/extension/src/core/api/MessageSender.ts) 中实现的类发送消息给前端，通过 [RequestHandler.ts](../../packages/extension/src/core/api/RequestHandler.ts) 中实现的类接收前端消息。

在前端分别通过 [listener.ts](../../packages/gui/src/api/listener.ts) 和  [sender.ts](../../packages/gui/src/api/sender.ts) 来接收和发送消息。

发送的信息为对象类型，其中必定包含 `command` 字段，表示当前发送的信息的类型。文档中的三级标题即为 `command` 字段对应的值。比如 `language.set` 命令对应的信息为：

```ts
{
  command: "language.set",
  lang: "en"
}
```

## 插件 => 前端

### `language.set`

设置前端界面语言

参数：

- `lang: 'en' | 'zh-cn'` 语言代码

### `configuration.update`

插件刚启动是或者其中的某个设置更新时发送。

参数：

- `configuration: SharedConfiguration` 设置信息的字符串

## 前端 => 插件

### `init.ready`

前端组件挂载完成后发送，表示可以正常接收数据了

无参数
