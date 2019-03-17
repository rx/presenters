import {hookupComponents} from './base-component';
import {VBaseToggle} from './base-toggle';
import {MDCCheckbox} from '@material/checkbox';

export function initCheckboxes(e) {
    console.log('\tCheckboxes');
    hookupComponents(e, '.v-checkbox', VCheckbox, MDCCheckbox);
}

export class VCheckbox extends VBaseToggle {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        this.mdcComponent.indeterminate = (this.input.dataset.indeterminate === 'true');
    }

    isDirty() {
        return String(this.input.checked) != this.element.dataset.originalValue;
    }
}
