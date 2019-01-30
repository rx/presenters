import {VErrors} from "./events/errors";

export class VBaseComponent {
    constructor(element, mdcComponent) {
        this.element = element;
        this.mdcComponent = mdcComponent;
    }

    validate(formData) {
        return true;
    }
    show() {}
    hide() {}

    clearErrors() {
        new VErrors().clearErrors();
    }
}

export function hookupComponents(selector, VoomClass, MdcClass) {

    const components = document.querySelectorAll(selector);
    for (let i = 0; i < components.length; i++) {
        const component = components[i];
        if (!component.mdcComponent) {
            let mdcInstance = null;
            if (MdcClass != null) {
                mdcInstance = new MdcClass(component);
            }
            if (!component.vComponent) {
                component.vComponent = new VoomClass(component, mdcInstance);
            }
        }
    }
}

