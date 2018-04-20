import {VErrors} from './errors';

export class VBase {
    constructor(options) {
        this.options = options;
    }

    clearErrors() {
        new VErrors().clearErrors();
    }

    parentElement() {
        return document.getElementById(this.options.__parent_id__);
    }

    extractInputValues() {
        var params = [];
        // Let input component push parameters
        var vComp = this.component();
        if (vComp) {
            vComp.prepareSubmit(null, params);
        }
        return this.paramsArrayToHash(params);
    }

    component(){
        return  this.parentElement().vComponent;
    }

    paramsArrayToHash(params) {
        var results = {};
        // Map params to object/hash
        for (let param of params) {
            results[param[0]] = param[1];
        }
        return results;
    }
}
