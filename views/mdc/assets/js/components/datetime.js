import flatpickr from 'flatpickr';
import { MDCTextField } from '@material/textfield';
import { VTextField } from './text-fields';
import { hookupComponents } from './base-component';
import appConfig from '../config';

export function initDateTime(e) {
    console.debug('\tDateTime');
    hookupComponents(e, '.v-datetime', VDateTime, MDCTextField);
    hookupComponents(e, '.v-date-text', VDateText, MDCTextField);
}

export class VDateTime extends VTextField {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);

        const type = element.dataset.type;
        const defaultConfig = {};
        if (!this.root.documentElement) {
          defaultConfig.appendTo = this.root.querySelector('.v-root');
        }
        const config = Object.assign(
            defaultConfig,
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
            const event = new Event('closed');
            element.dispatchEvent(event);
        };

        this.fp = flatpickr(this.input, config);
        this.fp.mdc_text_field = mdcComponent;

        element.addEventListener('click', () => this.toggle());
        this.originalValue = this.fp.input.value;
    }

    clear() {
        if (this.fp.input.value !== '') {
            this.fp.clear();
        }

        this.mdcComponent.foundation_.deactivateFocus();
    }

    reset() {
        this.fp.setDate(this.originalValue);
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

    isDirty() {
        if (!this.dirtyable) {
            return false;
        }
        const currVal = new Date(this.fp.input.value);
        const prevVal = new Date(this.originalValue);
        return currVal.getTime() !== prevVal.getTime();
    }
}

export class VDateText extends VTextField {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        element.addEventListener('input', this.createInputHandler(element.vComponent));
        element.vComponent.input.addEventListener('blur', () => this.validate(null));
    }

    createInputHandler(component) {
        return function(e) {
            let input = component.value();

            // Add a leading zero if input is like 1/ or 01 / 1/
            if (/^\d\/$/.test(input)) input = '0' + input;
            if (/^\d{2}\s\/\s\d\/$/.test(input)) input = input.slice(0,4) + '0' + input.slice(5,6);

            // Parse and format input
            if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
            let values = input.split('/').map(function(v) {
                return v.replace(/\D/g, '')
            });
            if (values[0]) values[0] = checkValue(values[0], 12);
            if (values[1]) values[1] = checkValue(values[1], 31);
            const output = values.map(function(v, i) {
                return v.length === 2 && i < 2 ? v + ' / ' : v;
            });
            component.setValue(output.join('').substr(0, 14));
        }
    }

    validate(formData) {
        const input = this.element.vComponent.value();
        if (this.isValidDate(input)) {
            if (this.origHelperText !== '') {
                this.helperDisplay.innerHTML = this.origHelperText;
                this.helperDisplay.classList.remove('mdc-text-field-helper-text--validation-msg');
                this.element.classList.remove('mdc-text-field--invalid');
            }
            else {
                this.helperDisplay.classList.add('v-hidden');
            }
            return true;
        }

        const message = this.helperDisplay.dataset.validationError ?
          this.helperDisplay.dataset.validationError :
          this.input.validationMessage;

        this.helperDisplay.innerHTML = message;
        this.helperDisplay.classList.add('mdc-text-field-helper-text--validation-msg');
        this.element.classList.add('mdc-text-field--invalid');

        const errorMessage = {};
        errorMessage[this.element.id] = [message];
        return errorMessage;
    }

    isValidDate(dateString) {
        dateString = dateString.replace(/\s+/g, '');
        if (dateString === '' && !this.input.required) {
            return true
        }
        if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
            return false;
        }

        const parts = dateString.split("/");
        const day = parseInt(parts[1], 10);
        const month = parseInt(parts[0], 10);
        const year = parseInt(parts[2], 10);

        if (year < 1000 || year > 3000 || month === 0 || month > 12) {
            return false;
        }

        const monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
        if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
            monthLength[1] = 29;
        }

        return day > 0 && day <= monthLength[month - 1];
    };

    isDirty() {
        if (!this.dirtyable) {
            return false;
        }
        const currVal = new Date(this.fp.input.value);
        const prevVal = new Date(this.originalValue);
        return currVal.getTime() !== prevVal.getTime();
    }
}

function checkValue(str, max) {
    if (str.charAt(0) !== '0' || str === '00') {
        let num = parseInt(str);
        if (isNaN(num) || num <= 0 || num > max) num = 1;
        str = num > parseInt(max.toString().charAt(0)) && num.toString().length === 1 ? '0' + num : num.toString();
    }
    return str;
}


