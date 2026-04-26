import * as vscode from 'vscode';
import { registerViews } from './core/init/registerViews';

export function activate(context: vscode.ExtensionContext) {
    registerViews(context);
}

export function deactivate() {}
