import flatpickr from "flatpickr";
import {VTextField} from './text-fields';
import {MDCTextField} from '@material/textfield';
import {hookupComponents} from "./base-component";

export function initDateTime() {
    console.log('\tDateTime');
    hookupComponents('.v-datetime', VDateTime, MDCTextField);
}

export class VDateTime extends VTextField {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        let config = JSON.parse(element.dataset.config);
        config.altInput = true;
        let type = element.dataset.type;

        if (type === 'datetime') {
            config.enableTime = true;
        } else if (type === 'time') {
            config.enableTime = true;
            config.noCalendar = true;
        }
        config.onOpen = function(selectedDates, dateStr, instance) {
            instance.mdc_text_field.foundation_.activateFocus();
        };
        config.onClose = function(selectedDates, dateStr, instance) {
            instance.mdc_text_field.foundation_.deactivateFocus();
        };
        this.fp = flatpickr(this.input, config);
        this.fp.mdc_text_field = mdcComponent;
   }

    clear() {

        if(this.fp.input.value!=='') {
            this.fp.clear();
        }
        this.mdcComponent.foundation_.deactivateFocus();
    }
}



