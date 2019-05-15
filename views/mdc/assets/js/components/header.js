import {MDCTopAppBar} from '@material/top-app-bar/index';
import {VBaseComponent} from './base-component';
import {hookupComponents} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';

export function initHeader(e) {
    console.debug('\tHeader');
    hookupComponents(e, '.v-header', VHeader, MDCTopAppBar);
}

export class VHeader extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent, root) {
        super(element, mdcComponent);
        element.addEventListener('MDCTopAppBar:nav', function() {
            var event = new Event('topbarclicked',{bubbles: true, composed: true});
            // Dispatch the event.
            element.dispatchEvent(event);
        });
    }
}
