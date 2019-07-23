import flatpickr from 'flatpickr';
import { MDCTextField } from '@material/textfield';
import { VTextField } from './text-fields';
import { hookupComponents } from './base-component';
import appConfig from '../config';

export function initDateTime(e) {
    console.debug('\tDateTime');
    hookupComponents(e, '.v-datetime', VDateTime, MDCTextField);
}
export class VDateTime extends VTextField {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);

        const type = element.dataset.type;
        const config = Object.assign(
            {},
            appConfig.get('component.datetime.flatpickr', {}),
            JSON.parse(element.dataset.config),
        );

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

        element.addEventListener('click', (e) => {
            var clickedElem = e.target;
            if (clickedElem.classList.contains('flatpickr-input')) {
                this.toggle()
            }
        });
    }

    clear() {
        if (this.fp.input.value !== '') {
            this.fp.clear();
        }

        this.mdcComponent.foundation_.deactivateFocus();
    }

    reset() {
        this.fp.setDate(this.element.dataset.originalValue);
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

    // checkDefaults() {
    //     if(this.fp.config.mode = 'range'){
    //         if(this.fp.selectedDates[1]){
    //             // If we are in range mode and the endDate is defined as the beginning of the day, default it to be the
    //             // end of the day.
    //             let endDate = this.fp.selectedDates[1];
    //             if(endDate.getHours() == 0 && endDate.getMinutes() == 0 && endDate.getSeconds() == 0 && endDate.getMilliseconds() == 0){
    //                 endDate.setHours(23);
    //                 endDate.setMinutes(59);
    //                 endDate.setSeconds(59);
    //                 endDate.getMilliseconds(9999);
    //                 this.fp.setDate(this.fp.selectedDates)
    //             }
    //         }
    //     }
    // }

    isDirty() {
        const currVal = new Date(this.fp.input.value);
        const prevVal = new Date(this.element.dataset.originalValue);
        return currVal.getTime() !== prevVal.getTime();
    }
}


