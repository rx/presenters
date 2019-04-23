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

    clearErrors() {
        new VErrors(this.root).clearErrors();
    }

    respondTo(method) {
        return typeof this[method] === 'function';
    }

    destroy() {
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

/* Inverse of hookupComponents.
    Used by replaces to cleanup.
 */
export function unhookComponents(element) {
    const components = element.querySelectorAll('.v-component');
    components.forEach(function(element) {
        if (element.mdcComponent) {
            element.mdcComponent.destroy();
            delete element.mdcComponent;
            element.mdcComponent = null;
            if (element.vComponent) {
                element.vComponent.destroy();
                delete element.vComponent;
                element.vComponent = null;
            }
        }
    });
}

