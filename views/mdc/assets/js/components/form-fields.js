import {MDCTextField} from '@material/textfield';

export function initTextFields() {
    console.log('\tTextFields');

    var textFields = document.querySelectorAll('.mdc-text-field');
    for (var i = 0; i < textFields.length; i++) {
        var textField = textFields[i];
        textField.mdcComponent = new MDCTextField(textField);
    }

}
