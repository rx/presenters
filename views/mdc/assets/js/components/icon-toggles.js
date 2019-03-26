import {hookupComponents} from './base-component';
import {VBaseToggle} from './base-toggle';
import {MDCIconToggle} from '@material/icon-toggle';

export function initIconToggles(e) {
    console.log('\tIcon Toggles');
    hookupComponents(e, '.v-icon-toggle', VIconToggle, MDCIconToggle);
}

export class VIconToggle extends VBaseToggle {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }
}
