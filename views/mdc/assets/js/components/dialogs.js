// This is used to get a proper binding of the actionData
// https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
import {VBaseContainer} from "./base-container";

export function initDialogs() {
    console.log('\tDialogs');

    var components = document.querySelectorAll('.v-dialog');
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if (!component.vComponent) {
            component.vComponent = new VDialog(component);
        }
    }
}

function createDialogHandler(dialog) {
    return function () {
        dialog.close();
    };
}

export class VDialog extends VBaseContainer {
    constructor(element) {
        super(element);
        let dialog = element;
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
