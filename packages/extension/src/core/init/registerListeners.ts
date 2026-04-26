import * as vscode from 'vscode';
import { Configuration } from '../api/Configuration';


export function registerListeners(context: vscode.ExtensionContext) {
    Configuration.registerChangeWatcher(context);
}
