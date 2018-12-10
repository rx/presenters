import {VBaseComponent} from "./base-component";

export class VBaseContainer extends VBaseComponent {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }

    inputs() {
        return this.element.querySelectorAll('.v-input')
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

    show() {
        for (const input of this.inputs()) {
            if (input.vComponent && input.vComponent.show) {
                input.vComponent.show();
            }
        }
    }
    // Called whenever a container is about to be submitted.
    // returns true on success
    // returns on failure return an error object that can be processed by VErrors:
    //    { email: ["email must be filled", "email must be from your domain"] }
    //    { :page: ["must be filled"] }
    validate(form, params) {
        console.log("Form validate", form, params);
        var errors = [];
        for (let input of this.inputs()) {
            if (input.vComponent && input.vComponent.validate) {
                var result = input.vComponent.validate(form, params);
                if (result !== true) {
                    errors.push(result);
                }
            }
        }
        return errors;
    }
}