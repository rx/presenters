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

    onShow() {}

    onHide() {}

    // Invoked after event handlers have been initialized.
    afterInit() {}

    parentComponent(selector) {
        const element = this.element.closest(selector);

        if (!(element && element.vComponent)) {
            return null;
        }

        return element.vComponent;
    }

    actionsHalted() {
        console.debug('VBaseComponent.prototype.actionsHalted');
    }

    actionsSucceeded() {
        console.debug('VBaseComponent.prototype.actionsSucceeded');
    }

    actionsFinished() {
        console.debug('VBaseComponent.prototype.actionsFinished');
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
}

export function hookupComponents(root, selector, VoomClass, MdcClass) {
    const components = Array.from(root.querySelectorAll(selector));

    if (root && typeof root.matches === 'function' && root.matches(selector)) {
        components.unshift(root);
    }

    for (const component of components) {
        if (component.mdcComponent) {
            continue;
        }

        const mdcInstance = typeof MdcClass === 'function'
            ? new MdcClass(component)
            : null;

        if (!component.vComponent) {
            component.vComponent = new VoomClass(component, mdcInstance, root);
            component.vComponent.root = root;
        }
    }
}

