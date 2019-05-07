// This is used to get a proper binding of the actionData
// https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
import {VBaseContainer} from './base-container';
import {eventHandlerMixin} from './mixins/event-handler';
import {hookupComponents} from './base-component';
import {MDCDialog} from '@material/dialog';

export function initDialogs(e) {
    console.debug('\tDialogs');
    hookupComponents(e, '.v-dialog', VDialog, MDCDialog);
}

export class VDialog extends eventHandlerMixin(VBaseContainer) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);

        const dialog = mdcComponent;
        const dialogButtons = element.querySelectorAll('.mdc-dialog__actions button:not([disabled])');

        for (const dialogButton of dialogButtons) {
            if (!dialogButton.dialog) {
                dialogButton.dialog = dialog;
            }
        }

        dialog.listen('MDCDialog:closing', function() {
            element.vComponent.reset();
            element.vComponent.clearErrors();
        });

        dialog.listen('MDCDialog:opened', function() {
            element.vComponent.onShow();
        });
    }

    open() {
        this.mdcComponent.open();
    }

    close() {
        this.mdcComponent.close();
    }
}
