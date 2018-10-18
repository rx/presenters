import flatpickr from 'flatpickr';
import { MDCTextField } from '@material/textfield';
import { VTextField } from './text-fields';
import { hookupComponents } from './base-component';

export class VDateTime extends VTextField {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);

        const type = element.dataset.type;
        const config = JSON.parse(element.dataset.config);

        config.altInput = true;
        config.clickOpens = false;

        if (type === 'datetime') {
            config.enableTime = true;
        } else if (type === 'time') {
            config.enableTime = true;
            config.noCalendar = true;
        }

        config.onOpen = function onOpen(selectedDates, dateStr, instance) {
            instance.mdc_text_field.foundation_.activateFocus();
        };
        config.onClose = function onClose(selectedDates, dateStr, instance) {
            instance.mdc_text_field.foundation_.deactivateFocus();
        };

        this.fp = flatpickr(this.input, config);
        this.fp.mdc_text_field = mdcComponent;

        element.addEventListener('click', () => this.toggle());
    }

    clear() {
        if (this.fp.input.value !== '') {
            this.fp.clear();
        }

        this.mdcComponent.foundation_.deactivateFocus();
    }

    open() {
        this.fp.open();
    }

    close() {
        this.fp.close();
    }

    toggle() {
        this.fp.toggle();
    }
}

export function initDateTime() {
    console.log('\tDateTime');
    hookupComponents('.v-datetime', VDateTime, MDCTextField);
}
