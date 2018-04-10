// This is used to get a proper binding of the actionData
// https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
function createDialogHandler(dialog) {
    return function () {
        dialog.close();
    };
}

export function initDialogs() {
    console.log('\tDialogs');

    var dialogs = document.querySelectorAll('.v-js-dialog');
    if (dialogs) {
        for (var i = 0; i < dialogs.length; i++) {
            var dialog = dialogs[i];
            var dialogButtons = dialog.querySelectorAll('button:not([disabled])');
            for (var j = 0; j != dialogButtons.length; j++) {
                var dialogButton = dialogButtons[j];
                if (!dialogButton.dialog) {
                    dialogButton.dialog = dialog;
                    var buttonEvents = dialogButton.dataset.events;
                    // If the dialog button does not have any events tied to it,
                    // then close the dialog on click, otherwise let the events handlers
                    // take care of the close.
                    if (!buttonEvents) {
                        dialogButton.addEventListener('click', createDialogHandler(dialog));
                    }
                }
            }
        }
    }
}
