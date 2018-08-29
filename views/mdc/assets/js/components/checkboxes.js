import {MDCCheckbox} from '@material/checkbox';
import {eventHandlerMixin} from "./mixins/event-handler";
import {VBaseComponent} from "./base-component";

export function initCheckboxes() {
    console.log('\tCheckboxes');

    var components = document.querySelectorAll('.mdc-checkbox');
    if (components) {
        for (var i = 0; i < components.length; i++) {
            var component = components[i];
            if (!component.mdcComponent) {
                component.vComponent = new VCheckbox(component, MDCCheckbox.attachTo(component));
            }
        }
    }
}

export class VCheckbox extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element);
        this.input = element.querySelector('input');
        this.mdcComponent = mdcComponent;
    }

    prepareSubmit(params) {
        if(this.input.checked) {
            params.push([this.name(), this.value()]);
        }
    }

    name(){
        return this.input.name;
    }

    value(){
        return this.input.value;
    }

    clear(){
        this.input.checked = false
    }

    setValue(value){
        this.input.value = value;
    }
}