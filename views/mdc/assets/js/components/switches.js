import {VBaseComponent} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';
import {MDCSwitch} from '@material/switch';

export function initSwitches() {
    console.log('\tSwitches');

    let components = document.querySelectorAll('.mdc-switch');
    if (components) {
        for (let i = 0; i < components.length; i++) {
            let component = components[i];
            if (!component.vComponent) {
                component.vComponent = new VSwitch(component, new MDCSwitch(component));
            }
        }
    }
}

export class VSwitch extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element);
        this.input = element.querySelector('input');
        this.mdcComponent = mdcComponent;
    }

    validate(_formData) {
        return true;
    }

    prepareSubmit(form, params) {
        if (!form) {
            params.push([this.input.name, this.input.checked]);
        }
    }
}