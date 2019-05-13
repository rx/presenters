import {expandParam} from './action_parameter';

export class VSnackbarEvent {
    constructor(options, params, event, root) {
        this.options = options;
        this.text = params.text;
        this.event = event;
        this.root = root;
        const snackbarElem = this.root.querySelector('.mdc-snackbar');
        this.snackbar = snackbarElem.vComponent;
    }

    call(results) {
        const snackbar = this.snackbar;
        const message = expandParam(results, this.text);
        return new Promise(function(resolve) {
            console.debug('Showing snackbar');
            snackbar.display(message);
            results.push({action: 'snackbar', statusCode: 200});
            resolve(results);
        });
    }
}
