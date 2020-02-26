import {VBaseComponent, hookupComponents} from './base-component';
import {dirtyableMixin} from './mixins/dirtyable';

export function initHiddenFields(e) {
    console.debug('\tHiddenFields');
    hookupComponents(e, '.v-hidden-field', VHiddenField, null);
}

export class VHiddenField extends dirtyableMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        this.originalValue = this.value();
    }

    // Called to collect data for submission
    prepareSubmit(params) {
        params.push([this.name(), this.value()]);
    }

    name() {
        return this.element.name;
    }

    value() {
        return this.element.value;
    }

    clear() {
        this.setValue('');
    }

    reset() {
        this.element.value = this.originalValue;
    }

    setValue(value) {
        this.element.value = value;
    }

    isDirty() {
        return this.dirtyable
            && this.value() !== this.originalValue;
    }
}
