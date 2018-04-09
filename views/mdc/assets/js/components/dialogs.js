export function initDialogs() {
    console.log('\tDialogs');

    var dialogs = document.querySelectorAll('.v-js-dialog');
    if (dialogs) {
        for (var i = 0; i < dialogs.length; i++) {
            var dialog = dialogs[i];
            var dialogButtons = dialog.querySelectorAll('button:not([disabled])');
            for (var i = 0; i != dialogButtons.length; i++) {
                var dialogButton = dialogButtons[i];
                if (!dialogButton.dialog) {
                    dialogButton.dialog = dialog;
                    var buttonEvents = dialogButton.dataset.events;
                    // If the dialog button does not have any events tied to it,
                    // then close the dialog on click, otherwise let the events handlers
                    // take care of the close.
                    if (!buttonEvents) {
                        dialogButtons[i].addEventListener('click', function () {
                            dialog.close();
                        });
                    }
                }
            }
        }
    }
}
