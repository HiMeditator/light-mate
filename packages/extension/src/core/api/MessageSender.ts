import * as vscode from 'vscode';
import { SharedConfiguration, ModelDisplay } from '../../types';

export class MessageSender{
    static view: vscode.WebviewView | undefined;

    static languageSet(){
        MessageSender.view?.webview.postMessage({
            command: 'language.set',
            lang: vscode.env.language === 'zh-cn' ? 'zh-cn' : 'en'
        });
    }

    static configurationUpdate(configuration: SharedConfiguration){
        MessageSender.view?.webview.postMessage({
            command: 'configuration.update',
            configuration
        });
    }

    static modelsUpdate(models: ModelDisplay[], modelID: string){
        MessageSender.view?.webview.postMessage({
            command: 'models.update',
            models,
            modelID
        });
    }

    static modelIDUpdate(modelID: string){ 
        MessageSender.view?.webview.postMessage({
            command: 'modelID.update',
            modelID
        });
    }
}
