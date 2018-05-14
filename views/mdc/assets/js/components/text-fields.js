import {MDCTextField} from '@material/textfield';
import {VBaseComponent} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';

export function initTextFields() {
    console.log('\tTextFields');

    var textFields = document.querySelectorAll('.mdc-text-field');
    for (var i = 0; i < textFields.length; i++) {
        var textField = textFields[i];
        if (!textField.vComponent) {
            var vTextField = new VTextField(textField, new MDCTextField(textField));
            var input = textField.querySelector('input');
            input.vComponent = vTextField;
            textField.vComponent = vTextField;
        }
    }
}

export class VTextField extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element);
        this.input = element.querySelector('input');
        this.mdcComponent = mdcComponent;
    }

    // Called whenever a form is about to be submitted.
    // returns true on success
    // returns on failure return an error object that can be processed by VErrors:
    //    { email: ["email must be filled", "email must be from your domain"] }
    //    { :page: ["must be filled"] }
    validate(formData) {
        console.log("TextField validate", formData);
        let isValid = this.input.checkValidity();
        if(isValid) {
            return true;
        }
        let errorMessage = {};
        errorMessage[this.input.id] =  [this.input.validationMessage];
        return errorMessage;
    }

    value(){
        return this.input.value;
    }

    // Called to collect data for submission
    prepareSubmit(form, params) {
        var optionSelected = this.optionSelected();
        if (optionSelected) {
            var key = optionSelected.dataset.key;
            if (key) {
                var name = this.input.name;
                var id = name + '_id';
                params.push([id, key]);
                console.log("TextField prepareSubmit added:" + id + '=' + key);
            }
        }
        // On actual post/submit the form is passed and we are not expected to return our value
        if (!form) {
            params.push([this.input.name, this.input.value]);
        }
    }

    optionSelected() {
        var dataList = this.element.querySelector('datalist');
        var parentElement = this.input;

        // If we find the input inside our list, we submit the form
        for (var element of dataList.children) {
            if (element.value === parentElement.value) {
                return element;
            }
        }
        return null;
    }
}
