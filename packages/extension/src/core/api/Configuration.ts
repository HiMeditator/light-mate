import * as vscode from 'vscode';
import { MessageSender } from './MessageSender';
import { SharedConfiguration } from '../../types';

export class Configuration {
    static readonly sectionID = 'lightMate';

    static get<T>(key: string): T | undefined {
        const configuration = vscode.workspace.getConfiguration(Configuration.sectionID);
        return configuration.get<T>(key);
    }

    static getSharedConfiguration(): SharedConfiguration {
        return {
            sendRequestShortcut: Configuration.get<string>('sendRequestShortcut') ?? "Ctrl+Enter",
            codeHighlightTheme: Configuration.get<string>('codeHighlightTheme') ?? "github"
        };
    }

    static registerChangeWatcher(context: vscode.ExtensionContext) {
        const configurationChange = vscode.workspace.onDidChangeConfiguration(event => {
            if(event.affectsConfiguration(Configuration.sectionID)) {
                Configuration.onChangeCallback(event);
            }
        });
        context.subscriptions.push(configurationChange);
    }

    static onChangeCallback(event: vscode.ConfigurationChangeEvent) {
        if(
            event.affectsConfiguration('lightMate.sendRequestShortcut') ||
            event.affectsConfiguration('lightMate.codeHighlightTheme')
        ) {
            MessageSender.configurationUpdate(Configuration.getSharedConfiguration());
        }
    };
}
