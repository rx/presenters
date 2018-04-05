export class VDialog {
    constructor(dialogId, params, event) {
        this.dialogId = dialogId;
        this.params = params;
        this.event = event;
    }

    call() {
        var dialog = document.querySelector('#' + this.dialogId);
        if (!dialog.showModal) {
            dialogPolyfill.registerDialog(dialog);
        }

        dialog.showModal();
        var promiseObj = new Promise(function (resolve) {
            resolve(true);
        });
        return promiseObj;
    }
}
