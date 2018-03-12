export function initDialogs() {
    console.log('\tDialogs');

    'use strict';
    var docDialogButtons = document.querySelectorAll('.v-js-dialog-button');
    for (var i = 0; i < docDialogButtons.length; i++) {
        var button = docDialogButtons[i];
        var dialog = document.querySelector('#' + button.dataset.dialogId);
        if (!dialog.showModal) {
            dialogPolyfill.registerDialog(dialog);
        }

        button.addEventListener('click', function (event) {
            var button = event.target;
            var dialogId = button.dataset.dialogId;
            var dialog = document.querySelector('#' + dialogId);
            dialog.showModal();
        });

        var dialogButtons = dialog.querySelectorAll('button:not([disabled])');
        for (var i = 0; i != dialogButtons.length; i++) {
            dialogButtons[i].addEventListener('click', function () {
                dialog.close();
            });
        }
    }
}
