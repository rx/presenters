import {VBaseComponent, hookupComponents} from './base-component';
import {eventHandlerMixin} from "./mixins/event-handler";
import {MDCTabBar} from '@material/tab-bar';

export function initTabBars() {
    console.log('\tTab Bars');
    hookupComponents('.v-tab-bar', VTabBar, MDCTabBar);
}

export class VTabBar extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }
}
