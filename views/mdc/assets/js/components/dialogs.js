import {VBaseContainer} from './base-container';
import {eventHandlerMixin} from './mixins/event-handler';
import {hookupComponents} from './base-component';
import {MDCDialog, MDCDialogFoundation} from '@material/dialog';

// Here be dragons.

/**
 * Causes the bound dialog's adapter to emit a closing event when applicable.
 * @param {String} action
 * @this {VDialog}
 */
function beforeClose(action = '') {
    const mdcDialog = this.mdcComponent;

    if (this.shouldNotifyClosing) {
        mdcDialog.foundation_.adapter_.notifyClosing(action);
        this.shouldNotifyClosing = false;
    }
}

/**
 * Actually closes the bound dialog.
 * @param {String} action
 * @this {MDCDialogFoundation}
 */
function hideDialog(action = '') {
    this.isOpen_ = false;
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.CLOSING);
    this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
    this.adapter_.removeBodyClass(MDCDialogFoundation.cssClasses.SCROLL_LOCK);

    cancelAnimationFrame(this.animationFrame_);
    this.animationFrame_ = 0;

    clearTimeout(this.animationTimer_);
    this.animationTimer_ = setTimeout(() => {
        this.adapter_.releaseFocus();
        this.handleAnimationTimerEnd_();
        this.adapter_.notifyClosed(action);
    }, MDCDialogFoundation.numbers.DIALOG_ANIMATION_CLOSE_TIME_MS);
}

export function initDialogs(e) {
    console.debug('\tDialogs');
    hookupComponents(e, '.v-dialog', VDialog, MDCDialog);
}

export class VDialog extends eventHandlerMixin(VBaseContainer) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);

        // Closeable state:
        this.shouldNotifyClosing = true;
        this.canClose = false;

        mdcComponent.listen('MDCDialog:opened', this.onShow.bind(this));

        mdcComponent.listen('MDCDialog:closed', () => {
            this.reset();
            this.clearErrors();

            // Reset closeable state:
            this.shouldNotifyClosing = true;
            this.canClose = false;
        });

        mdcComponent.listen('MDCDialog:closing', (mdcEvent) => {
            const action = mdcEvent.detail.action || '';
            const event = new CustomEvent('close', {
                cancelable: true,
                bubbles: true,
                detail: {action},
            });

            this.element.dispatchEvent(event);
        });
    }

    open() {
        this.mdcComponent.open();
    }

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
    }
}
