import {MDCSelect} from '@material/select';
import {VBaseComponent} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';

export function initSelects() {
    console.log('\tSelects');
    var components = document.querySelectorAll('.mdc-select');
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if (!component.vComponent) {
            component.vComponent = new VSelect(component, MDCSelect.attachTo(component));
        }
    }
}


export class VSelect extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element);
        this.select = element.querySelector('select');
        this.select.vComponent = this;
        this.mdcComponent = mdcComponent;
    }

    prepareSubmit(params) {
        params.push([this.name(), this.value()]);
    }

    name(){
        return this.select.name;
    }

    value(){
        return this.select.options[this.select.selectedIndex].value;
    }

    clear(){
        this.select.selectedIndex = -1;
        this.setValue('');
    }

    setValue(value){
        this.select.value = value;
    }
}