export function initDialogs(root) {
    console.log('\tDialogs');

    var docDialogs = root.querySelectorAll('.v-js-dialog');
    for (var i = 0; i < docDialogs.length; i++) {
        var dialog = docDialogs[i];
        
        var dialogButtons = dialog.querySelectorAll('button:not([disabled])');
        for (var i = 0; i != dialogButtons.length; i++) {
            var buttonEvents = dialogButtons[i].dataset.events;
            dialogButtons[i].dialog = dialog;
            // If the dialog button does not have any events tied to it,
            // then close the dialog on click, otherwise let the events handlers
            // take care of the close.
            if(!buttonEvents) {
                dialogButtons[i].addEventListener('click', function () {
                    dialog.close();
                });
            }
        }
    }
}
