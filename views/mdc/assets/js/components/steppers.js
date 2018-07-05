import {eventHandlerMixin} from "./mixins/event-handler";
import {VBaseComponent} from "./base-component";

export function initSteppers() {
    console.log('\tStepper');
    // if (typeof componentHandler !== 'undefined') { // MDL is loaded?
    //     //componentHandler.upgradeDom();
    //
    //     let components = document.querySelectorAll('ul.mdl-stepper');
    //     for (let component of components) {
    //         let Stepper = component.MaterialStepper;
    //         createContinueClickHandlers(component.querySelectorAll('[data-stepper-continue]'), Stepper);
    //         createBackClickHandlers(component.querySelectorAll('[data-stepper-back]'), Stepper);
    //         createSkipClickHandlers(component.querySelectorAll('[data-stepper-skip]'), Stepper);
    //     }
    // }

    let components = document.querySelectorAll('ul.mdl-stepper');
    for (let i = 0; i < components.length; i++) {
        let component = components[i];
        if (!component.vComponent) {
            component.vComponent = new VStepper(component);
        }
    }
}

export class VStepper extends eventHandlerMixin(VBaseComponent) {
    constructor(element) {
        super(element);

        if (typeof componentHandler !== 'undefined') { // MDL is loaded?
            componentHandler.upgradeElement(element);

            let Stepper = element.MaterialStepper;
            createContinueClickHandlers(element.querySelectorAll('[data-stepper-next]'), Stepper);
            createBackClickHandlers(element.querySelectorAll('[data-stepper-back]'), Stepper);
            createSkipClickHandlers(element.querySelectorAll('[data-stepper-skip]'), Stepper);
        }
    }
}

function createContinueClickHandlers(nextButtons, Stepper) {
    for (let next of nextButtons) {
        next.addEventListener('click', () => {
            Stepper.next();
        });
    }
}

function createBackClickHandlers(backButtons, Stepper) {
    for (let back of backButtons) {
        back.addEventListener('click', () => {
            Stepper.back();
        });
    }
}

function createSkipClickHandlers(skipButtons, Stepper) {
    for (let skip of skipButtons) {
        skip.addEventListener('click', () => {
            Stepper.skip();
        });
    }
}
