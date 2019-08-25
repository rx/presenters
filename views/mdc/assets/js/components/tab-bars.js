import {VBaseComponent, hookupComponents} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';
import {MDCTabBar} from '@material/tab-bar';

export function initTabBars(e) {
    console.debug('\tTab Bars');
    hookupComponents(e, '.v-tab-bar', VTabBar, MDCTabBar);
}

export class VTabBar extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);

        mdcComponent.listen('MDCTabBar:activated', (event) => {
            const tabs = element.parentElement.querySelectorAll(
                '.v-tab-content');

            for (const element of tabs) {
                if (Number(element.dataset.tabId) == event.detail.index) {
                    element.classList.remove('v-hidden');
                }
                else {
                    element.classList.add('v-hidden');
                }
            });
        });
    }
}
