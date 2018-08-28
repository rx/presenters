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

    prepareSubmit(params) {
        params.push([this.name(), this.value()]);
    }

    name(){
        return this.input.name;
    }

    value(){
        return this.input.checked;
    }

    clear(){
        this.setValue(false);
    }

    setValue(value){
        this.input.checked = value;
    }

}
