import {MDCIconToggle} from '@material/icon-toggle';

export function initIconToggles() {
    console.log('\tIcon Toggles');

    var components = document.querySelectorAll('.mdc-icon-toggle');
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if (!component.mdcComponent) {
            component.mdcComponent = new MDCIconToggle(component);
        }
    }
}
