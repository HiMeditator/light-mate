import * as vscode from 'vscode';


export class RequestHandler {

    public static handleRequest(message: any) {
        // console.log('[Extension Receive]', JSON.stringify(message));
        switch (message.command) {
            case 'init.ready':
                this.prepareInit();
                break;
        }
    }

    private static prepareInit() {
        vscode.window.showInformationMessage('Light Mate is ready!');
    }
}
