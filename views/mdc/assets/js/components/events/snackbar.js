import {VSnackbar} from '../snackbar.js';

export class VSnackbarEvent {
    constructor(params, event) {
            this.params = params;
            this.event = event;
        }

    call() {
        var message = this.params.text;
        var promiseObj = new Promise(function (resolve) {
            console.log("Showing snackbar");
            new VSnackbar(message).display();
            resolve([200, null, null]);
        });
        return promiseObj;
    }
}
