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
    }

    onHide() {
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

