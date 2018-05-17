import {VBaseComponent} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';

export function initSwitches() {
    console.log('\tSwitches');

    let components = document.querySelectorAll('.v-switch');
    if (components) {
        for (let i = 0; i < components.length; i++) {
            let component = components[i];
            if (!component.vComponent) {
                let input = component.querySelector('input');
                let vSwitch = new VSwitch(component, input);
                component.vComponent = vSwitch;
                input.vComponent = vSwitch;
            }
        }
    }
}

export class VSwitch extends eventHandlerMixin(VBaseComponent) {
    constructor(element, input) {
        super(element);
        this.input = input;
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