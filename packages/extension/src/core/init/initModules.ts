import * as vscode from 'vscode';
import { GlobalContext } from '../data';


export function initModules(context: vscode.ExtensionContext) {
    GlobalContext.init(context);
}
