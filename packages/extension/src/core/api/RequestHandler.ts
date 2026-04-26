import * as vscode from 'vscode';
import { MessageSender } from './MessageSender';

export class RequestHandler {

    public static handleRequest(message: any) {
        console.log('[Extension Receive]', message);
        switch (message.command) {
            case 'init.ready':
                RequestHandler.prepareInit();
                break;
        }
    }

    private static prepareInit() {
        MessageSender.view?.webview.postMessage({
            command: 'data.test',
            data: {
                "info": "Data Communication Test",
                "array": [0, 1, 2, 3],
                "object": {
                    "name": "Light Mate",
                    "version": "0.0.1" 
                }
            }
        });
    }
}
