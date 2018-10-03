import {VErrors} from './errors';
import {VUrls} from '../../utils/urls';

export class VBase extends VUrls {
    constructor(options) {
        super();
        this.options = options;
    }

    clearErrors() {
        new VErrors().clearErrors();
    }

    parentElement() {
        return document.getElementById(this.options.__parent_id__);
    }

    inputValues(form) {
        let params = [];

        // If tagged input is asked for. Fetch all the matching tag elements and then call any bound components
        if (this.params.input_tag !== undefined) {
            var taggedInputs = document.querySelectorAll('[data-input-tag=' + this.params.input_tag + ']');
            for (let input of taggedInputs) {
                if (input.vComponent && typeof input.vComponent.prepareSubmit === 'function') {
                    input.vComponent.prepareSubmit(params);
                }
            }
        }
        // Let input components push parameters
        let vComp = this.component();
        if (vComp && typeof vComp.prepareSubmit === 'function') {
            vComp.prepareSubmit(params);
        }
        return params;
    }

    component() {
        let parent = this.parentElement();
        return parent ? parent.vComponent : null;
    }

    validate() {
        let errors = [];
        let comp = this.component();
        if (comp) {
            errors = comp.validate();
        }
        return errors;
    }
}
