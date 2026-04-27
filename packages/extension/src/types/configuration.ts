/**
 * The shared configuration for the extension.
 * It will be shared with the frontend.
 */
export interface SharedConfiguration {
    /** The keyboard shortcut used to trigger the sending of a message or request.
     * Defaults to "Ctrl+Enter".
     */
    sendRequestShortcut: string,
    /** The identifier for the color theme applied to code blocks.
     * Defaults to "github".
     */
    codeHighlightTheme: string
}
