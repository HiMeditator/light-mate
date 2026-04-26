import * as vscode from 'vscode';
import { initModules } from './core/init/initModules';
import { registerViews } from './core/init/registerViews';
import { registerListeners } from './core/init/registerListeners';
import { registerCommands } from './core/init/registerCommands';


export function activate(context: vscode.ExtensionContext) {
    initModules(context);
    registerViews(context);
    registerListeners(context);
    registerCommands(context);
}

export function deactivate() {}
