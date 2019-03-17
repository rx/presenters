import {VBaseContainer} from "./base-container";
import {hookupComponents} from "./base-component";
import {eventHandlerMixin} from './mixins/event-handler';

export function initGrid(e) {
    console.log('\tGrid');
    hookupComponents(e, '.v-grid', VGrid, null);
    hookupComponents(e, '.v-column', VColumn, null);
}

export class VGrid extends eventHandlerMixin(VBaseContainer) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }
}

export class VColumn extends eventHandlerMixin(VBaseContainer) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }
}
