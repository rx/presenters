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

    taggedInputs() {
        const inputTag = this.options.input_tag;

        if (!inputTag) {
            return [];
        }

        const selector = `[data-input-tag="${inputTag}"]`;
        const inputs = document.querySelectorAll(selector);

        if (inputs.length < 1) {
            console.warn(
                `input_tag ${inputTag} matched 0 elements. Are you sure`
                + 'you\'ve specified the correct value?'
            );
        }

        return inputs;
    }

    inputValues(form) {
        const params = [];

        // If tagged input is asked for, fetch all the matching tag elements
        // and then call any bound components:
        if (this.options.input_tag !== undefined) {
            const inputs = this.taggedInputs()
                .filter((input) => input.vComponent)
                .map((input) => input.vComponent)
                .filter((comp) => typeof comp.prepareSubmit === 'function');

            for (const component of inputs) {
                component.prepareSubmit(params);
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
