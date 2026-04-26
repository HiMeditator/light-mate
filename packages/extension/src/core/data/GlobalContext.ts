import * as vscode from 'vscode';

export class GlobalContext {
    /** The extension context provided by VS Code. */
    static context: vscode.ExtensionContext;

    /**
     * Initializes the global context with the provided extension context.
     * @param context - The extension context provided by VS Code.
     */
    static init(context: vscode.ExtensionContext) {
        GlobalContext.context = context;
    }
}
