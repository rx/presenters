import {VBaseComponent} from './base-component';

export class VBaseContainer extends VBaseComponent {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
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

    inputComponents() {
        return Array.from(this.inputs())
            .filter((element) => element.vComponent)
            .map((element) => element.vComponent);
    }

    // Called to collect data for submission
    prepareSubmit(params) {
        for (const comp of this.inputComponents()) {
            if (comp.respondTo('prepareSubmit')) {
                comp.prepareSubmit(params);
            }
        }
    }

    clear() {
        for (const comp of this.inputComponents()) {
            if (comp.respondTo('clear')) {
                comp.clear();
            }
        }
    }

    reset() {
        for (const comp of this.inputComponents()) {
            if (comp.respondTo('reset')) {
                comp.reset();
            }
        }
    }

    onShow() {
        for (const comp of this.inputComponents()) {
            if (comp.respondTo('onShow')) {
                comp.onShow();
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
        return this.inputComponents()
            .filter((component) => component.respondTo('isDirty'))
            .map((component) => component.isDirty())
            .some(Boolean);
    }
}
