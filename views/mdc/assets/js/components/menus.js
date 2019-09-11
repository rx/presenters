import {MDCMenu, Corner} from '@material/menu';
import {hookupComponents, unhookupComponents, VBaseComponent} from "./base-component";
import {eventHandlerMixin} from "./mixins/event-handler";
import {initEvents, removeEvents} from "./events"

function createMenuHandler(menu, element) {
    return function (event) {
        let offset = parseInt(element.dataset.rightOffset);
        let placement = element.dataset.placement === 'contextual' ? Corner.TOP_LEFT : Corner.BOTTOM_LEFT;
        menu.setAbsolutePosition(event.clientX, event.clientY);
        menu.setAnchorMargin({left: offset});
        menu.setAnchorCorner(placement);
        menu.open = !menu.open;
        event.stopPropagation();
    };
}

function createSurfaceClickHandler(mdcMenu) {
    return function (event) {
        if (mdcMenu.open) {
            if (event.target.classList.contains('v-menu-link')) {
                mdcMenu.open = false;
            }
        }
    };
}

export function uninitMenus(root) {
    console.debug('\tUninit Menus');
    unhookupComponents(root, '.v-menu');
}

export function initMenus(root) {
    console.debug('\tMenus');
    hookupComponents(root, '.v-menu', VMenu, null);
}

export class VMenu extends eventHandlerMixin(VBaseComponent) {
    constructor(element) {
        super(element);
        this.hoistedMenuElement = element.querySelector('.mdc-menu');
        this.mdcComponent = new MDCMenu(this.hoistedMenuElement);

        initEvents(this.hoistedMenuElement);

        // Ensure that the menu surface closes when an item is clicked
        this.hoistedMenuElement.addEventListener('click', createSurfaceClickHandler(this.mdcComponent), { capture: true });

        var link = this.menulink();
        if (link) {
            link.addEventListener('click', createMenuHandler(this.mdcComponent, element));
        }
        if (this.hoistedMenuElement.getAttribute('data-hoist') != 'true') {
            this.mdcComponent.hoistMenuToBody();
        }
    }

    destroy() {
        super.destroy();
        removeEvents(this.hoistedMenuElement);

        var link = this.menulink();
        if (link) {
            link.removeEventListener('click', createMenuHandler(this.mdcComponent, this.element));
        }

        this.hoistedMenuElement.removeEventListener('click', createSurfaceClickHandler(), { capture: true });
        this.hoistedMenuElement.parentNode.removeChild(this.hoistedMenuElement);
    }

    menulink() {
        var anchor = this.element.closest('.mdc-menu-anchor');
        var link = null;
        if (anchor) {
            link = anchor.querySelector('.v-menu-click');
        }
        return link;
    }
}
