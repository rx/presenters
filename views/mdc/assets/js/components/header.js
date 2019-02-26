import {MDCTopAppBar} from '@material/top-app-bar/index';
import {VBaseComponent} from './base-component';
import {hookupComponents} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';

export function initHeader() {
    console.log('\tHeader');
    hookupComponents('.v-header', VHeader, MDCTopAppBar);
}


export class VHeader extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }
}


