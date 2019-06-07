import {VBase} from './base';

export class VStepperEvent extends VBase {
    constructor(options, params, event, root) {
        super(options, root);
        this.params = params;
        this.event = event;
    }

    call(results) {
        const parentElem = this.root.getElementById(this.params.stepper_id);
        const component = parentElem.vComponent;
        const navAction = this.params.navigate;

        return new Promise(function(resolve) {
            component.navigate(navAction);
            results.push({action: 'stepper', statusCode: 200});
            resolve(results);
        });
    }
}
