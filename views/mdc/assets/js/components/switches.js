import {hookupComponents} from './base-component';
import {VBaseToggle} from './base-toggle';
import {MDCSwitch} from '@material/switch';

export function initSwitches() {
    console.log('\tSwitches');
    hookupComponents('.v-switch', VSwitch, MDCSwitch);
}

export class VSwitch extends VBaseToggle {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }

    isDirty() {
        return String(this.input.checked) != this.element.dataset.originalValue;
    }
}
