import {MDCCheckbox} from '@material/checkbox';

export function initCheckboxes() {
    console.log('\tCheckboxes');

    var components = document.querySelectorAll('.mdc-checkbox');
    if (components) {
        for (var i = 0; i < components.length; i++) {
            var component = components[i];
            if (!component.mdcComponent) {
                component.mdcComponent = MDCCheckbox.attachTo(component);
            }
        }
    }
}