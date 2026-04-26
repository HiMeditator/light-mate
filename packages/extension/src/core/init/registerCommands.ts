import * as vscode from 'vscode';


export function registerCommands(context: vscode.ExtensionContext) {
    const gotoSettings = vscode.commands.registerCommand('light-mate.goto.settings', () => {
        vscode.commands.executeCommand(
            'workbench.action.openSettings', 
            '@ext:himeditator.light-mate'
        );
    });
    context.subscriptions.push(gotoSettings);
}
