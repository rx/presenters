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
        element.addEventListener('blur', this.createBlurHandler(element.vComponent));
    }

    createInputHandler(component) {
        return function(e) {
            let input = component.value();
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

    createBlurHandler(component) {
        return function(e) {
            let input = component.value();
            let values = input.split('/').map(function (v, i) {
                return v.replace(/\D/g, '')
            });
            let output = '';
            if (values.length === 3) {
                const year = values[2].length !== 4 ? parseInt(values[2]) + 2000 : parseInt(values[2]);
                const month = parseInt(values[0]) - 1;
                const day = parseInt(values[1]);
                const d = new Date(year, month, day);
                if (!isNaN(d)) {
                    output = [d.getMonth() + 1, d.getDate(), d.getFullYear()].map(function (v) {
                        v = v.toString();
                        return v.length === 1 ? '0' + v : v;
                    }).join(' / ');
                }
            }
            component.setValue(output);
        };
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

function checkValue(str, max) {
    if (str.charAt(0) !== '0' || str == '00') {
        let num = parseInt(str);
        if (isNaN(num) || num <= 0 || num > max) num = 1;
        str = num > parseInt(max.toString().charAt(0)) && num.toString().length === 1 ? '0' + num : num.toString();
    };
    return str;
};

