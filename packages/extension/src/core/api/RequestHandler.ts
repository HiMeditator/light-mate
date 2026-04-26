import * as vscode from 'vscode';
import { MessageSender } from './MessageSender';
import { Configuration } from '../api/Configuration';

export class RequestHandler {

    public static handleRequest(message: any) {
        console.log('[Extension Receive]', message);
        switch (message.command) {
            case 'init.ready':
                RequestHandler.initReady();
                break;
        }
    }

    private static initReady() {
        MessageSender.languageSet();
        MessageSender.configurationUpdate(Configuration.getSharedConfiguration());
    }
}
