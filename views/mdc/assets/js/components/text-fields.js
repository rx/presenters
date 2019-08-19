import {MDCTextField} from '@material/textfield';
import {VBaseComponent, hookupComponents} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';
import {visibilityObserverMixin} from './mixins/visibility-observer';
import {dirtyableMixin} from './mixins/dirtyable';

const AFTER_INPUT_EVENT = 'after_input';
const AFTER_INPUT_TIMEOUT = 500; // ms

export function initTextFields(e) {
    console.debug('\tTextFields');
    hookupComponents(e, '.v-text-field', VTextField, MDCTextField);
}

export class VTextField extends dirtyableMixin(
    visibilityObserverMixin(
    eventHandlerMixin(VBaseComponent))) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);

        this.input = element.querySelector('input,textarea');
        this.input.vComponent = this;
        this.afterInputTimeout = null;

        this.recalcWhenVisible(this);

        this.input.addEventListener('input', (event) => {
            clearTimeout(this.afterInputTimeout);
            this.afterInputTimeout = setTimeout(() => {
                this.element.dispatchEvent(new Event(AFTER_INPUT_EVENT));
            }, AFTER_INPUT_TIMEOUT)
        });

        this.originalValue = this.value();
    }

    // Called whenever a form is about to be submitted.
    // returns true on success
    // returns on failure return an error object that can be processed by VErrors:
    //    { email: ["email must be filled", "email must be from your domain"] }
    //    { :page: ["must be filled"] }
    validate(formData) {
        console.debug('TextField validate', formData);
        let isValid = this.input.checkValidity();
        if (isValid) {
            return true;
        }
        let errorMessage = {};
        errorMessage[this.input.id] = [this.input.validationMessage];
        return errorMessage;
    }

    // Called to collect data for submission
    prepareSubmit(params) {
        var optionSelected = this.optionSelected();
        if (optionSelected) {
            var key = optionSelected.dataset.key;
            if (key) {
                var name = this.name();
                var id = name + '_id';
                params.push([id, key]);
                console.debug('TextField prepareSubmit added:' + id + '=' + key);
            }
        }
        params.push([this.name(), this.value()]);
    }

    optionSelected() {
        var dataList = this.element.querySelector('datalist');
        if (dataList) {
            var parentElement = this.input;
            // If we find the input inside our list, we submit the form
            for (var element of dataList.children) {
                if (element.value === parentElement.value) {
                    return element;
                }
            }
        }
        return null;
    }

    name() {
        return this.input.name;
    }

    value() {
        return this.input.value;
    }

    clear() {
        if (this.value() !== '') {
            this.setValue(null);
        }
    }

    reset() {
        this.input.value = this.originalValue;
    }

    setValue(value) {
        this.input.value = value;
    }

    isDirty() {
        return this.dirtyable
            && this.value().localeCompare(this.originalValue) !== 0;
    }

    onShow() {
        this.mdcComponent.layout();
    }

    preview(result, acceptsMimeTypes) {
        this.setValue(result);
    }

    // Return true if focus is able to be set, false otherwise
    focus() {
        if (this.isHidden() || this.input.disabled) return false;
        this.input.focus();
        return true;
    }

    isHidden() {
        const style = window.getComputedStyle(this.element);
        return (style.display === 'none');
    }
}
