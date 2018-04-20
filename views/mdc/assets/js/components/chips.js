import {MDCChip} from '@material/chips';

export function initChips() {
    console.log('\tChips');
    var components = document.querySelectorAll('.mdc-chip');
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if(!component.mdcComponent) {
            component.mdcComponent = MDCChip.attachTo(component);
        }
    }
}
