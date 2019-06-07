import {hookupComponents} from './base-component';
import {VBaseToggle} from './base-toggle';
import {MDCCheckbox} from '@material/checkbox';

export function initCheckboxes(e) {
    console.debug('\tCheckboxes');
    hookupComponents(e, '.v-checkbox', VCheckbox, MDCCheckbox);
}

export class VCheckbox extends VBaseToggle {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        this.mdcComponent.indeterminate = (this.input.dataset.indeterminate === 'true');
    }

    isDirty() {
        // If the checkbox is cannot be dirtied, it is never dirty.
        if (!this.element.hasAttribute('data-original-value')) {
            return false;
        }

        return String(this.input.checked) != this.element.dataset.originalValue;
    }
}
