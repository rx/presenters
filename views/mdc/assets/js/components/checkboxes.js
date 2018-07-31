import {MDCCheckbox} from '@material/checkbox';
import {eventHandlerMixin} from "./mixins/event-handler";
import {VBaseComponent} from "./base-component";
import {MDCFormField} from "@material/form-field/index";
import {MDCRadio} from "@material/radio/index";
import {VRadio} from "./radios";

export function initCheckboxes() {
    console.log('\tCheckboxes');

    var components = document.querySelectorAll('.mdc-checkbox');
    if (components) {
        for (var i = 0; i < components.length; i++) {
            var component = components[i];
            if (!component.mdcComponent) {
                component.vComponent = new VCheckbox(radio, MDCCheckbox.attachTo(component));
            }
        }
    }
}

export class VCheckbox extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element);
        this.input = element.querySelector('input');
        this.mdcComponent = mdcComponent;
    }

    prepareSubmit(form, params) {
        // On actual post/submit the form is passed and we are not expected to return our value
        if (!form) {
            params.push([this.input.name, this.input.value]);
        }
    }
}