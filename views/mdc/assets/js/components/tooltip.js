import {MDCTooltip} from '@material/tooltip';
import {VBaseComponent} from './base-component';
import {hookupComponents} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';

export function initTooltips(e) {
    console.log('\tTooltips');
    hookupComponents(e, '.v-tooltip', VTooltip, MDCTooltip);
}

export class VTooltip extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }
}

