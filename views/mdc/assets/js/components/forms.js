export function initForms() {
    console.log('\tForms');

    var components = document.querySelectorAll('.v-form');
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if (!component.vComponent) {
            component.vComponent = new VForm(component);
        }
    }
}

export class VForm {
    constructor(element) {
        this.element = element;
    }

    // Called whenever a form is about to be submitted.
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

    inputs() {
        return this.element.elements;
    }

    // Called to collect data for submission
    prepareSubmit(form, params) {
        for (let input of this.inputs()) {
            if (input.vComponent && input.vComponent.prepareSubmit) {
                input.vComponent.prepareSubmit(form, params);
            }
        }
    }

    initEventListener(eventName, eventHandler) {
        for (let input of this.inputs()) {
            if (input.vComponent && input.vComponent.initEventListener) {
                input.vComponent.initEventListener(eventName, eventHandler);
            }
        }
    }
}
