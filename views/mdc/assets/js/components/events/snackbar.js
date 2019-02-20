import {expandParam} from './action_parameter';

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
        const message = expandParam(results, this.text);
        return new Promise(function(resolve) {
            console.log('Showing snackbar');
            snackbar.display(message);
            results.push({action: 'snackbar', statusCode: 200});
            resolve(results);
        });
    }
}
