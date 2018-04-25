import {MDCSelect} from '@material/select';
import {VBaseComponent} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';

export function initSelects() {
    console.log('\tSelects');
    var components = document.querySelectorAll('.mdc-select');
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if (!component.vComponent) {
            let vSelect = new VSelect(component, MDCSelect.attachTo(component));
            component.vComponent = vSelect;
            var selectInput = component.querySelector('select');
            selectInput.vComponent = vSelect;
        }
    }
}


export class VSelect extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element);
        this.select = element.querySelector('select');
        this.mdcComponent = mdcComponent;
    }

    prepareSubmit(form, params) {
        // On actual post/submit the form is passed and we are not expected to return our value
        if (!form) {
            params.push([this.select.name, this.select.value]);
        }
    }

    validate() {
        return true;
    }

    name(){
            
    }

    value(){

    }
}