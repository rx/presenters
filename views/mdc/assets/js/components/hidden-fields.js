import {VBaseComponent, hookupComponents} from './base-component';

export function initHiddenFields() {
    console.log('\tHiddenFields');
    hookupComponents('.v-hidden-field', VHiddenField, null);
}

export class VHiddenField extends VBaseComponent {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }

    // Called to collect data for submission
    prepareSubmit(params) {
        params.push([this.name(), this.value()]);
    }

    name(){
        return this.element.name;
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

    isDirty() {
        return this.value() != this.dataset.originalValue;
    }
}
