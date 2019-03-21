import {hookupComponents} from './base-component';
import {VBaseToggle} from './base-toggle';
import {MDCRadio} from "@material/radio";

export function initRadios() {
    console.log('\tRadios');
    hookupComponents('.v-radio', VRadio, MDCRadio);
}

export class VRadio extends VBaseToggle {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }

    isDirty() {
        return String(this.input.checked) != this.element.dataset.originalValue;
    }
}
