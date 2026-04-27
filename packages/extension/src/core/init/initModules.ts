import * as vscode from 'vscode';
import { GlobalContext } from '../data';
import { LangDict } from '../../utils/localization';
import { ConfigManager } from '../../storage/ConfigManager';

export async function initModules(context: vscode.ExtensionContext) {
    GlobalContext.init(context);
    LangDict.init(context.extensionUri);
    await ConfigManager.init();
}
