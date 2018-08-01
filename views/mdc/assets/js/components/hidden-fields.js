import {MDCTextField} from '@material/textfield';
import {VBaseComponent} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';

export function initHiddenFields() {
    console.log('\tHiddenFields');

    var fields = document.querySelectorAll('.v-hidden-field');
    for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        if (!field.vComponent) {
            field.vComponent = new VHiddenField(field);
        }
    }
}

export class VHiddenField extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element);
        // With the component the element is the input
        this.vComponent = this;
    }

    value(){
        return this.element.value;
    }

    // Called to collect data for submission
    prepareSubmit(form, params) {
        // On actual post/submit the form is passed and we are not expected to return our value
        if (!form) {
            params.push([this.element.name, this.element.value]);
        }
    }

    clear(){
        this.element.setValue('');
    }

    setValue(value){
        this.element.value = value;
    }
}
