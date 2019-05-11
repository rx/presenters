import {VErrors} from './events/errors';

export class VBaseComponent {
    constructor(element, mdcComponent) {
        this.root = element.ownerDocument;
        this.element = element;
        this.mdcComponent = mdcComponent;
        this.element.classList.add('v-component');
    }

    validate(formData) {
        return true;
    }

    onShow() {
<<<<<<< Updated upstream
    }

    onHide() {
=======
    }

    onHide() {
    }

    // Invoked after event handlers have been initialized.
    afterInit() {
    }

    parentComponent(selector) {
        if (!this.element.parentElement) {
            return null;
        }
        const element = this.element.parentElement.closest(selector);

        if (!(element && element.vComponent)) {
            return null;
        }

        return element.vComponent;
    }

    // Event actions results bubble up to their containers
    actionsStarted(vEvent) {
        const ev = new Event('V:actionsStarted', {
            bubbles: true,
            cancelable: false,
            detail: vEvent,
        });
        this.element.dispatchEvent(ev);
    }

    // Event actions results bubble up to their containers
    actionsHalted(vEvent) {
        const ev = new Event('V:actionsHalted', {
            bubbles: true,
            cancelable: false,
            detail: vEvent,
        });
        this.element.dispatchEvent(ev);
    }

    actionsSucceeded(vEvent) {
        const ev = new CustomEvent('V:actionsSucceeded', {
            bubbles: true,
            cancelable: false,
            detail: vEvent,
        });
        this.element.dispatchEvent(ev);
    }

    actionsFinished(vEvent) {
        const ev = new CustomEvent('V:actionsFinished', {
            bubbles: true,
            cancelable: false,
            detail: vEvent,
        });
        this.element.dispatchEvent(ev);
    }

    hasHandlers() {
        return this.eventsHandler && Object.keys(this.eventsHandler).length > 0;
>>>>>>> Stashed changes
    }

    clearErrors() {
        new VErrors(this.root).clearErrors();
    }

    respondTo(method) {
        return typeof this[method] === 'function';
    }
}

export function hookupComponents(root, selector, VoomClass, MdcClass) {
    const components = root.querySelectorAll(selector);
    for (let i = 0; i < components.length; i++) {
        const component = components[i];
        if (!component.mdcComponent) {
            let mdcInstance = null;
            if (MdcClass != null) {
                mdcInstance = new MdcClass(component);
            }
            if (!component.vComponent) {
                component.vComponent = new VoomClass(component, mdcInstance,
                    root);
                component.vComponent.root = root;
            }
        }
    }
}

