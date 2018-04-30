import {VSnackbar} from '../snackbar.js';

export class VSnackbarEvent {
    constructor(options, params, event) {
        this.options = options;
        this.params = params;
        this.event = event;
        let snackbarElem = document.querySelector('.mdc-snackbar');
        this.snackbar = snackbarElem.vComponent;
    }

    call(results) {
        let message = this.params.text;
        let snackbar = this.snackbar;
        let promiseObj = new Promise(function (resolve) {
            console.log("Showing snackbar");
            snackbar.display(message);
            results.push({action:'snackbar', statusCode: 200});
            resolve(results);
        });
        return promiseObj;
    }
}
