import {VBaseComponent} from './base-component';

export class VBaseContainer extends VBaseComponent {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        element.dataset.isContainer = true;
        this.element.classList.add('v-container');
    }

    components() {
        return Array.from(this.element.querySelectorAll('.v-component'))
            .filter((element) => element.vComponent)
            .map((element) => element.vComponent);
    }

    inputs() {
        return this.element.querySelectorAll('.v-input');
    }

    // Called to collect data for submission
    prepareSubmit(params) {
        for (let input of this.inputs()) {
            if (input.vComponent && input.vComponent.prepareSubmit) {
                input.vComponent.prepareSubmit(params);
            }
        }
    }

    clear() {
        for (const input of this.inputs()) {
            if (input.vComponent && input.vComponent.clear) {
                input.vComponent.clear();
            }
        }
    }

    onShow() {
        for (const input of this.inputs()) {
            if (input.vComponent && input.vComponent.onShow) {
                input.vComponent.onShow();
            }
        }
    }

    // Called whenever a container is about to be submitted.
    // returns true on success
    // returns on failure return an error object that can be processed by VErrors:
    //    { email: ["email must be filled", "email must be from your domain"] }
    //    { :page: ["must be filled"] }
    validate(form, params) {
        console.debug('Form validate', form, params);

        const errors = [];

        for (const comp of this.inputComponents()) {
            if (comp.respondTo('validate')) {
                const result = comp.validate(form, params);
                if (result !== true) {
                    errors.push(result);
                }
            }
        }
        return errors;
    }

    isDirty() {
        // A container is dirty if any of its dirtyable inputs is dirty:
        return Array.from(this.inputs())
            .filter((element) => element.vComponent)
            .map((element) => element.vComponent)
            .filter((component) => component.isDirty)
            .map((component) => component.isDirty())
            .some(Boolean);
    }
}
