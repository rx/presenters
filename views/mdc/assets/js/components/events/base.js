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
        var params = [];
        // Let input component push parameters
        var vComp = this.component();
        if (vComp) {
            vComp.prepareSubmit(form, params);
        }
        return params;
    }

    component() {
        let parent = this.parentElement();
        return parent ? this.parentElement().vComponent : null;
    }

    validate() {
        var errors = [];
        var comp = this.component();
        if (comp) {
            errors = comp.validate();
        }
        return errors;
    }
}
