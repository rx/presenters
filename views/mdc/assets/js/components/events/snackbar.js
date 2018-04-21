import {VSnackbar} from '../snackbar.js';

export class VSnackbarEvent {
    constructor(options, params, event) {
        this.options = options;
        this.params = params;
        this.event = event;
    }

    call(results) {
        var message = this.params.text;
        var promiseObj = new Promise(function (resolve) {
            console.log("Showing snackbar");
            new VSnackbar(message).display();
            results.push({action:'snackbar', statusCode: 200});
            resolve(results);
        });
        return promiseObj;
    }
}
