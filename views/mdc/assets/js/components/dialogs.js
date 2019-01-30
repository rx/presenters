// This is used to get a proper binding of the actionData
// https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
import {VBaseContainer} from './base-container';
import {hookupComponents} from './base-component';
import {MDCDialog} from '@material/dialog';

export function initDialogs() {
    console.log('\tDialogs');
    hookupComponents('.v-dialog', VDialog, MDCDialog);
}

export class VDialog extends VBaseContainer {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        const dialog = mdcComponent;
        const dialogButtons = element.querySelectorAll('button:not([disabled])');
        for (let j = 0; j != dialogButtons.length; j++) {
            const dialogButton = dialogButtons[j];
            if (!dialogButton.dialog) {
                dialogButton.dialog = dialog;
            }
        }

        dialog.listen('MDCDialog:closing', function() {
            element.vComponent.clear();
            element.vComponent.clearErrors();
        });

    }

    open() {
        this.mdcComponent.open();
    }

    close() {
        this.mdcComponent.close();
    }
}
