import * as vscode from 'vscode';
import { ExtensionPath } from '../data';


export function registerCommands(context: vscode.ExtensionContext) {
    const openSettings = vscode.commands.registerCommand('light-mate.settings.open', () => {
        vscode.commands.executeCommand(
            'workbench.action.openSettings', 
            '@ext:himeditator.light-mate'
        );
    });
    context.subscriptions.push(openSettings);

    const openConfig = vscode.commands.registerCommand('light-mate.config.open', () => {
        vscode.commands.executeCommand(
            'vscode.open',
            ExtensionPath.configUri
        );
    });
    context.subscriptions.push(openConfig);
}
