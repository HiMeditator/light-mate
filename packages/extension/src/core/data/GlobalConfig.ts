import * as vscode from 'vscode';
import * as os from 'os';

export class GlobalConfig {
    /** The directory path for storing extension data */
    static readonly storageDir = vscode.Uri.joinPath(vscode.Uri.file(os.homedir()), '/.light-mate');

    /** The file path for the extension config file */
    static readonly configUri = vscode.Uri.joinPath(this.storageDir, 'config.json');

    /** The file path for the extension config JSON schema */
    static readonly configSchemaPath = vscode.Uri.joinPath(this.storageDir, 'config-schema.json');

    /** The directory path for database files */
    static readonly datebaseDir = vscode.Uri.joinPath(this.storageDir, 'db');
}
