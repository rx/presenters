import {VBaseComponent} from "./base-component";
import {eventHandlerMixin} from "./mixins/event-handler";
import {MDCSlider} from '@material/slider';

export function initSliders() {
    console.log('\tSliders');

    var components = document.querySelectorAll('.mdc-slider');
    for (var i = 0; i < components.length; i++) {
        var comp = components[i];
        if (!comp.vComponent) {
            comp.vComponent = new VSlider(comp, new MDCSlider(comp));
        }
    }
}

export class VSlider extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element);
        this.mdcComponent = mdcComponent;
    }

    prepareSubmit(form, params) {
        // On actual post/submit the form is passed and we are not expected to return our value
        //if (!form) {
            params.push([this.element.getAttribute('data-name'), this.mdcComponent.value]);
        //}
    }
}
