import {MDCRipple} from '@material/ripple';
import {VBaseComponent} from "./base-component";
import {hookupComponents} from "./base-component";
import {eventHandlerMixin} from './mixins/event-handler';

export function initButtons() {
    console.log('\tButtons');
    hookupComponents('.v-js-ripple-button', VButton, MDCRipple);
}


export class VButton extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }
}

