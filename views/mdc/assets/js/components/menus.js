import {MDCMenu} from '@material/menu';
import {Corner} from '@material/menu';


function createMenuHandler(menu, element) {
    return function () {
        var offset = parseInt(element.dataset.rightOffset);
        menu.setAnchorMargin({left: offset});
        menu.open = !menu.open;
    };
}

export function initMenus() {
    console.log('\tMenus');

    var components = document.querySelectorAll('.v-menu');
    if (components) {
        for (var i = 0; i < components.length; i++) {
            var component = components[i];
            if (!component.mdcComponent) {
                component.mdcComponent = new MDCMenu(component);
                var anchor = component.closest('.mdc-menu-anchor').querySelector('.v-menu-click');
                anchor.addEventListener('click', createMenuHandler(component.mdcComponent, component));
            }
        }
    }
}
