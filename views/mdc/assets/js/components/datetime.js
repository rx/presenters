import flatpickr from "flatpickr";
import {VTextField} from './text-fields';
import {MDCTextField} from '@material/textfield';


export function initDateTime() {
    console.log('\tDateTime');
    let components = document.querySelectorAll('.v-datetime');
    for (let i = 0; i < components.length; i++) {
        let component = components[i];
        if (!component.vComponent) {
            component.vComponent = new VDateTime(component, new MDCTextField(component));
        }
    }
}


export class VDateTime extends VTextField {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        let config = JSON.parse(element.dataset.config);
        config.altInput = true;
        let type = element.dataset.type;

        if(type==='datetime'){
            config.enableTime = true;
        }else if(type==='time'){
            config.enableTime=true;
            config.noCalendar=true;
        }
        flatpickr(this.input, config);
    }
}



