// This is used to get a proper binding of the actionData
// https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
import {VBaseContainer} from './base-container';
import {hookupComponents} from './base-component';
import {MDCDialog} from '@material/dialog';

export function initDialogs(e) {
    console.log('\tDialogs');
    hookupComponents(e, '.v-dialog', VDialog, MDCDialog);
}

export class VDialog extends VBaseContainer {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        const dialog = mdcComponent;
        const dialogButtons = element.querySelectorAll('.mdc-dialog__actions button:not([disabled])');
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

        dialog.listen('MDCDialog:opened', function() {
            element.vComponent.onShow();
        });
    }

    open() {
        this.mdcComponent.open();
    }

<<<<<<< Updated upstream
    close() {
        this.mdcComponent.close();
=======
    close(action = '') {
        action = action || '';

        beforeClose.call(this, action);

        if (this.canClose) {
            hideDialog.call(this.mdcComponent.foundation_, action);
        }
    }

    actionsSucceeded(vEvent) {
        // A successful run-to-completion of an event chain should always
        // attempt to close the dialog.
        this.shouldNotifyClosing = false;
        this.canClose = true;

        this.close(vEvent.event.detail.action);
        super.actionsSucceeded(vEvent); // Bubble up
    }

    actionsHalted(vEvent) {
        // A halted event chain should not close the dialog.
        this.shouldNotifyClosing = true;
        this.canClose = false;
        super.actionsHalted(vEvent); // Bubble up
    }

    get buttons() {
        return this.components().filter((c) => c.is('VButton'));
    }

    afterInit() {
        const dialogHasHandlers = this.hasHandlers();
        const buttonsHaveHandlers = this.buttons
            .map((c) => c.hasHandlers())
            .some(Boolean);

        if (dialogHasHandlers || buttonsHaveHandlers) {
            // Stub in our own dialog close method to ensure events run to
            // completion before the dialog is closed:
            this.mdcComponent.foundation_.close = this.close.bind(this);
        }
>>>>>>> Stashed changes
    }
}
