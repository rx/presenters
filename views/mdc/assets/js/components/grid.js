import {VBaseContainer} from "./base-container";
import {hookupComponents, VBaseComponent} from "./base-component";
import {eventHandlerMixin} from './mixins/event-handler';
import {visibilityObserverMixin} from "./mixins/visibility-observer";

export function initGrid(e) {
    console.debug('\tGrid');
    hookupComponents(e, '.v-grid', VGrid, null);
    hookupComponents(e, '.v-column', VColumn, null);
}

export class VGrid extends visibilityObserverMixin(
    eventHandlerMixin(VBaseComponent)) {

    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        this.recalcWhenVisible(this);
    }

    onShow() {
        this.mdcComponent.layout();
    }
}

export class VColumn extends visibilityObserverMixin(
    eventHandlerMixin(VBaseComponent)) {

    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        this.recalcWhenVisible(this);
    }

    onShow() {
        this.mdcComponent.layout();
    }
}
