// This is used to get a proper binding of the actionData
// https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
import {VBaseContainer} from './base-container';
import {hookupComponents} from './base-component';
import {MDCFormField} from '@material/form-field';

export function initFormFields() {
    console.log('\tForm Fields');
    hookupComponents('.v-form-field', VFormField, MDCFormField);
}

export class VFormField extends VBaseContainer {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }
}
