import * as vscode from 'vscode';
import { SharedConfiguration } from '../../types';

export class MessageSender{
    public static view: vscode.WebviewView | undefined;

    public static languageSet(){
        MessageSender.view?.webview.postMessage({
            command: 'language.set',
            lang: vscode.env.language === 'zh-cn' ? 'zh-cn' : 'en'
        });
    }

    public static configurationUpdate(configuration: SharedConfiguration){
        MessageSender.view?.webview.postMessage({
            command: 'configuration.update',
            configuration
        });
    }
}
