import {VBaseComponent} from "./base-component";
import {eventHandlerMixin} from "./mixins/event-handler";
import {MDCTabBar} from '@material/tab-bar';

export function initTabBars() {
    console.log('\tTab Bars');

    var components = document.querySelectorAll('.v-tab-bar');
    for (var i = 0; i < components.length; i++) {
        var comp = components[i];
        if (!comp.vComponent) {
            comp.vComponent = new VTabBar(comp, new MDCTabBar(comp));
        }
    }
}

export class VTabBar extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcTabBarComponent) {
        super(element);
        this.mdcComponent = mdcTabBarComponent;
    }
}
