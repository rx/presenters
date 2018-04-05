// This class displays a page level message
export class VSnackbar {
    constructor(message, action_text, action_fn) {
        this.message = message;
        this.action_text = action_text;
        this.action_fn = action_fn;
    }

    display() {
        var snackbarContainer = document.querySelector('#snackbar');
        var data = {
            message: this.message,
            timeout: 2000,
            actionHandler: this.action_fn,
            actionText: this.action_text
        };
        componentHandler.upgradeElement(snackbarContainer);
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
    }
}
