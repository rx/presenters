import {eventHandlerMixin} from "./mixins/event-handler";
import {VBaseContainer} from "./base-container";


export function initSteppers() {
    console.log('\tStepper');
    let components = document.querySelectorAll('ul.mdl-stepper');
    for (let i = 0; i < components.length; i++) {
        let component = components[i];
        if (!component.vComponent) {
            component.vComponent = new VStepper(component);
        }
    }
}

export class VStepper extends eventHandlerMixin(VBaseContainer) {
    constructor(element) {
        super(element);

        if (typeof componentHandler !== 'undefined') { // MDL is loaded?
            componentHandler.upgradeElement(element);
            this.stepper = element.MaterialStepper;
        }
    }

    inputs() {
        // A stepper content area does not live within the stepper element so let's get it from the right place
        return document.querySelectorAll('#' + this.element.id + '-content .v-input')
    }

    navigate(nav_action){
        if(nav_action === 'continue' || nav_action === 'next') {
            this.next_step();
        }
        else if(nav_action === 'back'){
            this.back_step();
        }
        else if(nav_action === 'skip'){
            this.skip_step();
        }
    }

    next_step() {
        this.stepper.next();
    }
    back_step() {
        this.stepper.back();
    }
    skip_step() {
        this.stepper.skip();
    }
}

