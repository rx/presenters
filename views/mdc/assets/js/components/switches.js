import {hookupComponents} from './base-component';
import {VBaseToggle} from './base-toggle';
import {MDCSwitch} from '@material/switch';

export function initSwitches(e) {
    console.debug('\tSwitches');
    hookupComponents(e, '.v-switch', VSwitch, MDCSwitch);
}

export class VSwitch extends VBaseToggle {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }
}
