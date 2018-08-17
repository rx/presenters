import {VBaseComponent} from "./base-component";
import {eventHandlerMixin} from "./mixins/event-handler";
import {MDCRadio} from "@material/radio";

export function initRadios() {
    console.log('\tRadios');

    var radios = document.querySelectorAll('.mdc-radio');
    for (var i = 0; i < radios.length; i++) {
        var radio = radios[i];
        if (!radio.vComponent) {
            radio.vComponent = new VRadio(radio, new MDCRadio(radio));
        }
    }
}

export class VRadio extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element);
        this.input = element.querySelector('input');
        this.mdcComponent = mdcComponent;
    }

    prepareSubmit(form, params) {
        // On actual post/submit the form is passed and we are not expected to return our value
        if (!form) {
            if(this.input.checked) {
                params.push([this.input.name, this.input.value]);
            }
        }
    }
}
