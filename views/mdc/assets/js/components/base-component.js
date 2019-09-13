import {VErrors} from './events/errors';

export class VBaseComponent {
    constructor(element, mdcComponent) {
        this.root = element.ownerDocument;
        this.element = element;
        this.mdcComponent = mdcComponent;
        this.element.classList.add('v-component');
    }

    destroy() {
        // Work in progress - this will ultimately be cleaning up other items like events, etc. (more to come)
        if(this.mdcComponent && this.mdcComponent.destroy) {
            this.mdcComponent.destroy();
        }
    }

    validate(formData) {
        return true;
    }

    onShow() {
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
    }

    clearErrors() {
        new VErrors(this.root).clearErrors();
    }

    respondTo(method) {
        return typeof this[method] === 'function';
    }

    is(name) {
        return this.constructor.name === name;
    }
}

function getCandidateElements(root, selector) {
    const elements = Array.from(root.querySelectorAll(selector));

    if (root && typeof root.matches === 'function' && root.matches(selector)) {
        elements.unshift(root);
    }

    return elements;
}

// `fn` is a unary function accepting a HTMLElement and returning an instance of
// VBaseComponent.
export function hookupComponentsManually(root, selector, fn) {
    const elements = getCandidateElements(root, selector);

    for (const element of elements) {
        if (element.mdcComponent || element.vComponent) {
            continue;
        }

        element.vComponent = fn(element);
        element.vComponent.root = root;
    }
}

export function hookupComponents(root, selector, VoomClass, MDCClass) {
    const ctor = componentFactory(VoomClass, MDCClass);
    hookupComponentsManually(root, selector, ctor);
}

// Returns a function capable of constructing a Voom component.
function componentFactory(VoomClass, MDCClass) {
    return (element) => new VoomClass(
        element,
        typeof MDCClass === 'function' ? new MDCClass(element) : null
    );
}

export function unhookupComponents(root, selector) {
    const elements = getCandidateElements(root, selector);

    for (const element of elements) {
        if (element.vComponent) {
            element.vComponent.destroy();
        }
    }
}
