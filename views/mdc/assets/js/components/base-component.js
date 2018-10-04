export class VBaseComponent {
    constructor(element, mdcComponent) {
        this.element = element;
        this.mdcComponent = mdcComponent;
    }

    validate(formData) {
        return true;
    }
}

export function hookupComponents(selector, voomClass, mdcClass){

    var components = document.querySelectorAll(selector);
    for (let i = 0; i < components.length; i++) {
        let component = components[i];
        if(!component.mdcComponent) {
            let mdcInstance = null;
            if(mdcClass != null){
                mdcInstance = new mdcClass(component);
            }
            if (!component.vComponent) {
                component.vComponent = new voomClass(component, mdcInstance);
            }
        }
    }
}

