import * as vscode from 'vscode';
import { LangDict, l10n } from '../utils/localization';
import { MessageSender } from '../core/api/MessageSender';
import { ExtensionPath, GlobalContext } from '../core/data';
import { configFileTemplate, configSchemaFileTemplate } from './template';

import { ModelDisplay, ModelConfig, ExtensionConfig } from '../types';

export class ConfigManager {
    static modelList: ModelConfig[] = [];

    static async init() {
        try {
            await vscode.workspace.fs.stat(ExtensionPath.configUri);
        } catch {
            await vscode.workspace.fs.writeFile(
                ExtensionPath.configUri,
                new TextEncoder().encode(JSON.stringify(configFileTemplate, null, 2))
            );
            vscode.window.showInformationMessage(
                `${l10n.t('config.created')} ${ExtensionPath.configUri.fsPath}`
            );
        }

        let lang = LangDict.lang ?? "en";
        const schema = configSchemaFileTemplate[lang];
        await vscode.workspace.fs.writeFile(
            ExtensionPath.schemaUri,
            new TextEncoder().encode(JSON.stringify(schema, null, 2))
        );
    }

    static getModelConfig(): ModelConfig | undefined {
        const modelID = GlobalContext.context.globalState.get<string>('modelID');
        const model = this.modelList.find(model => model.id === modelID);
        
        if (!model) {
            if (this.modelList.length > 0) {
                this.updateModelID(this.modelList[0].id);
                return { ...this.modelList[0] };
            }
            return undefined;
        }

        const realModel: ModelConfig = { ...model };
        if (realModel.api_key?.startsWith('env@')) {
            const envKey = realModel.api_key.substring(4);
            const envValue = process.env[envKey];
            realModel.api_key = envValue !== undefined ? envValue.trim() : '';
            if (realModel.api_key === '') {
                vscode.window.showErrorMessage(`${l10n.t('ts.envKeyNotFound')} ${model.api_key}`);
            }
        }
        return realModel;
    }

    static async getExtensionConfig() {
        try {
            const uint8Array = await vscode.workspace.fs.readFile(ExtensionPath.configUri);
            const configContent = new TextDecoder().decode(uint8Array);
            const config: ExtensionConfig = JSON.parse(configContent);
            return config;
        } catch (error) {
            vscode.window.showErrorMessage(`${l10n.t('config.parsingError')} ${error}`);
            return configFileTemplate;
        }
    }

    static async writeExtensionConfig(config: ExtensionConfig) {
        const content = new TextEncoder().encode(JSON.stringify(config, null, 2));
        await vscode.workspace.fs.writeFile(ExtensionPath.configUri, content);
    }

    static async updateModelsFromConfig() {
        const modelList = (await this.getExtensionConfig()).models;
        this.modelList = modelList;
        
        const models: ModelDisplay[] = modelList.map(model => ({
            id: model.id,
            provider: model.provider,
            name: model.name || model.model,
        }));
        
        const modelID = GlobalContext.context.globalState.get<string>('modelID');
        MessageSender.modelsUpdate(models, modelID ?? '');
    }

    static async addModelToExtensionConfig(model: ModelConfig) {
        const config = await this.getExtensionConfig();
        config.models.push(model);
        await this.writeExtensionConfig(config);
        await this.updateModelsFromConfig();
    }

    static async deleteModelFromExtensionConfig(modelID: string) {
        const config = await this.getExtensionConfig();
        config.models = config.models.filter(model => model.id !== modelID);
        await this.writeExtensionConfig(config);
        await this.updateModelsFromConfig();
    }

    static async updateModelID(modelID: string) {
        await GlobalContext.context.globalState.update('modelID', modelID);
        MessageSender.modelIDUpdate(modelID);
    }
}
