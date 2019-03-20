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

