import {MDCDrawer} from '@material/drawer';
import {VBaseComponent} from './base-component';
import {hookupComponents} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';

export function initDrawer() {
    console.log('\tDrawer');
    hookupComponents('.v-drawer__modal', VModalDrawer, MDCDrawer);
    hookupComponents('.v-drawer__dismissible', VDismissibleDrawer, MDCDrawer);
}

class VDrawer extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        const header = document.querySelector('.v-header');
        if (header) {
            header.addEventListener('MDCTopAppBar:nav',
                () => {
                    if (this.isActive()) {
                        this.mdcComponent.open = !this.mdcComponent.open;
                    }
                });
        }
    }

    isActive() {
        return (getComputedStyle(this.element).
            getPropertyValue('--v-drawer-active') !== 'no');
    }
}

export class VModalDrawer extends VDrawer {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        this.mdcComponent.open = false;
    }
}

export class VDismissibleDrawer extends VDrawer {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }
}
