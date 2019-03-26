import {VErrors} from './errors';
import {VUrls} from '../../utils/urls';

export class VBase extends VUrls {
    constructor(options, root) {
        super();
        this.options = options;
        this.root = root;
    }

    clearErrors() {
        new VErrors(this.root).clearErrors();
    }

    parentElement() {
        return this.root.getElementById(this.options.__parent_id__);
    }

    taggedInputs() {
        const inputTag = this.options.input_tag;

        if (!inputTag) {
            return [];
        }

        const selector = `[data-input-tag="${inputTag}"]`;
        const inputs = this.root.querySelectorAll(selector);

        if (inputs.length < 1) {
            console.warn(
                `input_tag ${inputTag} matched 0 elements. Are you sure`
                + 'you\'ve specified the correct value?'
            );
        }

        return inputs;
    }

    inputValues() {
        const params = [];

        // If tagged input is asked for, fetch all the matching tag elements
        // and then call any bound components:
        if (this.options.input_tag) {
            const inputs = Array.from(this.taggedInputs())
                .filter((input) => input.vComponent)
                .map((input) => input.vComponent)
                .filter((comp) => typeof comp.prepareSubmit === 'function');

            for (const component of inputs) {
                component.prepareSubmit(params);
            }
        }
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

    closestContainer() {
        const comp = this.component();

        if (!(comp && comp.element)) {
            return null;
        }

        return comp.element.closest('[data-is-container="true"]');
    }
}
