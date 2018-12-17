import {VActionParameter} from './action_parameter';

export class VSnackbarEvent {
    constructor(options, params, event) {
        this.options = options;
        this.text = params.text;
        this.event = event;
        const snackbarElem = document.querySelector('.mdc-snackbar');
        this.snackbar = snackbarElem.vComponent;
    }

    call(results) {
        const snackbar = this.snackbar;
        const message = this.message(results);
        return new Promise(function(resolve) {
            console.log('Showing snackbar');
            snackbar.display(message);
            results.push({action: 'snackbar', statusCode: 200});
            resolve(results);
        });
    }

    message(results) {
        if (this.text.type && this.text.type === 'action_parameter') {
            return new VActionParameter(this.text).fetchValue(results);
        }
        else {
            return this.text;
        }
    }
}
