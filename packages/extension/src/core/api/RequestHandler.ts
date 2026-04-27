import * as vscode from 'vscode';
import { MessageSender } from './MessageSender';
import { Configuration } from '../api/Configuration';
import { ConfigManager } from '../../storage/ConfigManager';
import { ModelConfig } from '../../types';

export class RequestHandler {

    public static handleRequest(message: any) {
        console.log('[Extension Receive]', message);
        switch (message.command) {
            case 'init.ready':
                RequestHandler.initReady();
                break;
            case 'model.add':
                RequestHandler.modelAdd(message.model);
                break;
            case 'model.delete':
                RequestHandler.modelDelete(message.modelID);
                break;
        }
    }

    private static initReady() {
        MessageSender.languageSet();
        MessageSender.configurationUpdate(Configuration.getSharedConfiguration());
        ConfigManager.updateModelsFromConfig();
    }

    private static modelAdd(model: ModelConfig) {
        ConfigManager.addModelToExtensionConfig(model);
    }

    private static modelDelete(modelID: string) {
        ConfigManager.deleteModelFromExtensionConfig(modelID);
    }
}
