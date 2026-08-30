import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "anti-slop" is now active!');

    let disposable = vscode.commands.registerCommand('anti-slop.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from anti-slop!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
