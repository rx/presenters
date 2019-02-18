import {VBaseComponent, hookupComponents} from './base-component';
import {eventHandlerMixin} from "./mixins/event-handler";
import {MDCRadio} from "@material/radio";

export function initRadios() {
    console.log('\tRadios');
    hookupComponents('.v-radio', VRadio, MDCRadio);
}

export class VRadio extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        this.input = element.querySelector('input');
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
        this.setValue('');
    }

    setValue(value){
        this.input.value = value;
    }

    isDirty() {
        return this.value() != this.element.dataset.originalValue;
    }
}
