import {eventHandlerMixin} from "./mixins/event-handler";
import {VBaseContainer} from "./base-container";
import {hookupComponents} from "./base-component";

export function initForms() {
    console.log('\tForms');
    hookupComponents('.v-form', VForm, null);
}

export class VForm extends eventHandlerMixin(VBaseContainer) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }
}
