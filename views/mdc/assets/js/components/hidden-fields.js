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
        this.vComponent = this;
    }

    // Called to collect data for submission
    prepareSubmit(params) {
        params.push([this.name(), this.value()]);
    }

    name(){
        return this.name;
    }

    value(){
        return this.element.value;
    }

    clear(){
        this.setValue('');
    }

    setValue(value){
        this.element.value = value;
    }
}
