import {MDCIconToggle} from '@material/icon-toggle';
import {hookupComponents, VBaseComponent} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';

export function initIconToggles() {
    console.log('\tIcon Toggles');
    hookupComponents('.v-icon-toggle', VIconToggle, MDCIconToggle);
}

export class VIconToggle extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }
}
