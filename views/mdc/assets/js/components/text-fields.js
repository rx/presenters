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
        this.helperDisplay = this.root.getElementById(`${element.id}-input-helper-text`);
        this.origHelperText = this.helperDisplay.innerHTML.trim();

        this.recalcWhenVisible(this);

        this.input.addEventListener('input', (event) => {
            clearTimeout(this.afterInputTimeout);
            this.afterInputTimeout = setTimeout(() => {
                this.element.dispatchEvent(new Event(AFTER_INPUT_EVENT, {composed: true}));
            }, AFTER_INPUT_TIMEOUT);
        });

        const caseType = element.dataset.case_type;
        if (caseType !== 'mixed') {
            this.input.addEventListener('keyup', (e) => {
                this.forceCase(caseType);
            });
        }
        this.originalValue = this.value();
    }

    // Called whenever a form is about to be submitted.
    // returns true on success
    // returns on failure return an error object that can be processed by VErrors:
    //    { email: ["email must be filled", "email must be from your domain"] }
    //    { :page: ["must be filled"] }
    validate(formData) {
        console.debug('TextField validate', formData);
        const isValid = this.input.checkValidity();
        if (isValid) {
            if (this.origHelperText !== '') {
                this.helperDisplay.innerHTML = this.origHelperText;
                this.helperDisplay.classList.remove('v-hidden', 'mdc-text-field-helper-text--validation-msg');
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

        const errorMessage = {};
        errorMessage[this.element.id] = [message];
        return errorMessage;
    }

    // Called to collect data for submission
    prepareSubmit(params) {
        const optionSelected = this.optionSelected();
        if (optionSelected) {
            const key = optionSelected.dataset.key;
            if (key) {
                const name = this.name();
                const id = name + '_id';
                params.push([id, key]);
                console.debug('TextField prepareSubmit added:' + id + '=' + key);
            }
        }
        params.push([this.name(), this.value()]);
    }

    optionSelected() {
        const dataList = this.element.querySelector('datalist');
        if (dataList) {
            const parentElement = this.input;
            // If we find the input inside our list, we submit the form
            for (const element of dataList.children) {
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

    forceCase(caseType){
        if (caseType === 'upper') {
            this.input.value = this.input.value.toUpperCase();
        } else if (caseType === 'lower') {
            this.input.value = this.input.value.toLowerCase();
        }
    }
}
