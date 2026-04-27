import * as vscode from 'vscode';

export type LangType = "en" | "zh-cn";

interface LangRelPath {
    "en": string;
    "zh-cn": string;
}

const langRelPath: LangRelPath = {
    "en": "l10n/bundle.l10n.json",
    "zh-cn": "l10n/bundle.l10n.zh-cn.json",
};

export class LangDict {
    static lang?: LangType;
    static path?: vscode.Uri;
    static dict?: Record<string, any>;
    static isInitialized = false;

    static async init(basePath: vscode.Uri){
        const currentLang = vscode.env.language.toLowerCase();
        this.lang = (currentLang in langRelPath) ? currentLang as LangType : 'en';

        this.path = vscode.Uri.joinPath(basePath, langRelPath[this.lang]);
        
        const content = await vscode.workspace.fs.readFile(this.path);
        this.dict = JSON.parse(new TextDecoder().decode(content));
        this.isInitialized = true;
    }

    static get(key: string): any {
        if (!this.isInitialized) {
            console.warn('LangDict is not initialized yet!');
        }
        return this.dict?.[key] || key;
    }

    static getDict(): Record<string, any> {
        return this.dict || {};
    }
}

export namespace l10n {
    export async function init(basePath: vscode.Uri) {
        await LangDict.init(basePath);
    }

    export function t(key: string): string {
        const value = LangDict.get(key);
        return typeof value === 'string' ? value : key;
    }

    export function get(key: string): any {
        return LangDict.get(key);
    }
}
