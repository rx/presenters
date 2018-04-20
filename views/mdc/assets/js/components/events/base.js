import {VErrors} from './errors';

export class VBase {
    constructor(options){
        this.options = options;
    }
    
    clearErrors() {
        new VErrors().clearErrors();
    }

    parentElement() {
        return document.getElementById(this.options.__parent_id__);
    }
}
