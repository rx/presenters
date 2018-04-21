import {MDCSelect} from '@material/select';
import {VBaseComponent} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';

export function initSelects() {
    console.log('\tSelects');
    var components = document.querySelectorAll('.mdc-select');
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if (!component.mdcComponent) {
            component.mdcComponent = MDCSelect.attachTo(component);
        }
    }
}


export class VSelect extends eventHandlerMixin(VBaseComponent) {
}