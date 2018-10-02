import {eventHandlerMixin} from "./mixins/event-handler";
import {VBaseContainer} from "./base-container";

export function initForms() {
    console.log('\tForms');

    var components = document.querySelectorAll('.v-form');
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if (!component.vComponent) {
            component.vComponent = new VForm(component);
        }
    }
}

export class VForm extends eventHandlerMixin(VBaseContainer) {
    constructor(element) {
        super(element);
    }
}
