import {MDCChip} from '@material/chips';
import {eventHandlerMixin} from "./mixins/event-handler";
import {VBaseComponent} from "./base-component";

export function initChips() {
    console.log('\tChips');
    var components = document.querySelectorAll('.mdc-chip');
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if(!component.mdcComponent) {
            component.vComponent = new VChip(component, MDCChip.attachTo(component));
        }
    }
}

export class VChip extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element);
        this.mdcComponent = mdcComponent;
    }

    // Called to collect data for submission
    prepareSubmit(form, params) {
        params.push([this.name(), this.value()]);
    }

    name(){
        return this.element.getAttribute('data-name');
    }

    value(){
        return this.element.getAttribute('data-value');
    }

    clear(){
        this.setValue('');
    }

    setValue(value){
        this.input.value = value;
    }

    validate(formData) {
        return true;
    }

}