import {VBase} from './base';

export class VStepperEvent extends VBase {

    constructor(options, params, event) {
        super(options);
        this.params = params;
        this.event = event;
    }

    call(results) {
        let parentElem = document.getElementById(this.params.stepper_id);
        let component = parentElem.vComponent;
        let nav_action = this.params.navigate;

        let promiseObj = new Promise(function (resolve) {
            console.log("Stepping: " + nav_action);
            component.navigate(nav_action);
            results.push({action:'stepper', statusCode: 200});
            resolve(results);
        });
        return promiseObj;
    }
}
