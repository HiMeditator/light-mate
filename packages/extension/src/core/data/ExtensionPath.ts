import * as vscode from 'vscode';
import * as os from 'os';

export class ExtensionPath {
    /** The directory path for storing extension data */
    static readonly storageDirUri = vscode.Uri.joinPath(vscode.Uri.file(os.homedir()), '/.light-mate');

    /** The file path for the extension settings file */
    static readonly configUri = vscode.Uri.joinPath(this.storageDirUri, 'config.json');

    /** The file path for the extension settings JSON schema */
    static readonly schemaUri = vscode.Uri.joinPath(this.storageDirUri, 'config-schema.json');

    /** The directory path for database files */
    static readonly databaseDirUri = vscode.Uri.joinPath(this.storageDirUri, 'db');
}
