import {MDCTextField} from '@material/textfield';

export function initTextFields(root) {
    console.log('\tTextFields');

    var textFields = root.querySelectorAll('.mdc-text-field');
    for (var i = 0; i < textFields.length; i++) {
        var textField = textFields[i];
        textField.mdcComponent = new MDCTextField(textField);
    }

}
