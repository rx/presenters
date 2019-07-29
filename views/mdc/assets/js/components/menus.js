import {MDCMenu} from '@material/menu';
import {Corner} from '@material/menu';
import {hookupComponents, VBaseComponent} from "./base-component";
import {eventHandlerMixin} from "./mixins/event-handler";
import {VEvents} from "./events";


function createMenuHandler(menu, element) {
    return function (event) {
        let offset = parseInt(element.dataset.rightOffset);
        let placement = element.dataset.placement === 'contextual' ? Corner.TOP_LEFT : Corner.BOTTOM_LEFT;
        menu.setAnchorMargin({left: offset});
        menu.setAnchorCorner(placement);
        menu.open = !menu.open;
        event.stopPropagation();
    };
}

export function initMenus(e) {
    console.debug('\tMenus');
    hookupComponents(e, '.v-menu', VMenu, MDCMenu);
}

export class VMenu extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);

        var anchor = element.closest('.mdc-menu-anchor');
        if (anchor) {
            var menulink = anchor.querySelector('.v-menu-click');
            menulink.addEventListener('click', createMenuHandler(mdcComponent, element));


        }

        // Ensure that the menu surface closes when an item is clicked
        element.addEventListener('click', (event) => {
            if(this.mdcComponent.open) {
                this.hide()
            }
        }, { capture: true });
    }

    show() {
        this.mdcComponent.open = true;
    }

    hide() {
        this.mdcComponent.open = false;
    }
}
