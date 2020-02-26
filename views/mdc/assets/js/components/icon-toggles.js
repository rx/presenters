import {hookupComponents} from './base-component';
import {VBaseToggle} from './base-toggle';
import {MDCIconButtonToggle} from '@material/icon-button';

export function initIconToggles(e) {
    console.debug('\tIcon Buttons');
    hookupComponents(e, '.v-icon-toggle', VIconToggle, MDCIconButtonToggle);
}

export class VIconToggle extends VBaseToggle {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }
}
