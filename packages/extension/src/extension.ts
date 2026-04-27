import * as vscode from 'vscode';
import { initModules } from './core/init/initModules';
import { registerViews } from './core/init/registerViews';
import { registerListeners } from './core/init/registerListeners';
import { registerCommands } from './core/init/registerCommands';


export async function activate(context: vscode.ExtensionContext) {
    await initModules(context);
    registerViews(context);
    registerListeners(context);
    registerCommands(context);
}

export function deactivate() {}
