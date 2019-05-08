/* global MaterialTooltip */

import {VBaseComponent} from './base-component';
import {hookupComponents} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';

export function initTooltips(e) {
    console.debug('\tTooltips');
    hookupComponents(e, '.v-tooltip', VTooltip, MaterialTooltip);
}

export class VTooltip extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }
}

