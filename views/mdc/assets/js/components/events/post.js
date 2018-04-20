import {VSnackbar} from '../snackbar';
import {VBase} from './base';

// Replaces a given element with the contents of the call to the url.
// parameters are appended.
export class VPost extends VBase {
    constructor(options, url, params, method, event) {
        super(options);
        this.url = url;
        this.params = params;
        this.method = method;
        this.event = event;
    }
    
    inputs() {
        if(this.isForm()) {
            return this.parentElement().querySelectorAll('input');
        }else{
            return [this.parentElement()];
        }
    }

    call() {
        this.clearErrors();

        var FD = null;
        var form = this.form();
        if (form) {
            FD = new FormData(form);
        } else {
            FD = new FormData();
        }

        // Push params from presenter into FormData object
        for (var name in this.params) {
            if (name != '__parent_id__') {
                FD.append(name, this.params[name]);
            }
        }

        // Prepare Form Data
        // needs https://www.npmjs.com/package/formdata-polyfill
        for (var input of this.inputs()) {
            if (input.vComponent) {
                input.vComponent.prepareSubmit(form);
            }
        }

        // Validate Input
        // needs https://www.npmjs.com/package/formdata-polyfill
        var errors = [];
        for (var input of this.inputs()) {
            if (input.vComponent) {
                var result = input.vComponent.validate(FD);
                if (result !== true) {
                    errors.push(result);
                }
            }
        }
        var promiseObj;

        if (errors.length > 0) {
            promiseObj = new Promise(function (_, reject) {
                reject([400, 'v/errors', errors]);
            });
        } else {
            var httpRequest = new XMLHttpRequest();
            var method = this.method;
            var url = this.url;
            var event = this.event;
            if (!httpRequest) {
                throw new Error('Cannot talk to server! Please upgrade your browser to one that supports XMLHttpRequest.');
                // new VSnackbar('Cannot talk to server! Please upgrade your browser to one that supports XMLHttpRequest.').display();
            }
            promiseObj = new Promise(function (resolve, reject) {
                httpRequest.onreadystatechange = function (event) {
                    if (httpRequest.readyState === XMLHttpRequest.DONE) {
                        console.log(httpRequest.status + ':' + this.getResponseHeader('content-type'));
                        if (httpRequest.status >= 200 && httpRequest.status < 300) {
                            resolve([httpRequest.status, this.getResponseHeader('content-type'), httpRequest.responseText, httpRequest.responseURL]);
                            // new VSnackbar('Yeah! That worked!').display();
                        } else {
                            // new VSnackbar('There was a problem with the request.').display();
                            reject([httpRequest.status, this.getResponseHeader('content-type'), httpRequest.responseText]);
                            // _this_.displayError(this.getResponseHeader('content-type'), event.target.responseText);
                        }
                    }
                };

                // Set up our request
                httpRequest.open(method, url);

                console.log(method + ':' + url);
                // Send our FormData object; HTTP headers are set automatically
                httpRequest.send(FD);
            });
        }
        return promiseObj;
    }

    isForm() {
        var parentElement = this.parentElement();
        return parentElement && parentElement.elements;
    }

    form() {
        if (this.isForm()) {
            return this.parentElement();
        }
        return null;
    }
}