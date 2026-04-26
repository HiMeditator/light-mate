import { vscode } from './vscode';

/** Send a custom message to the extension. */
export function sendMessage(message: Record<string, unknown>) {
    vscode?.postMessage(message);
}

/** Signal to the extension that the webview UI is ready to receive data. */
export function initReady(){
    vscode?.postMessage({command: 'init.ready'});
}
