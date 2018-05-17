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
        // Let input component push parameters
        let vComp = this.component();
        if (vComp) {
            vComp.prepareSubmit(form, params);
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
