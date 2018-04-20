import {VSnackbar} from '../snackbar';
import {VBase} from './base';

// Replaces a given element with the contents of the call to the url.
// parameters are appended.
export class VPosts extends VBase {
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

        var params = [];

        // Add params from presenter
        for (var name in this.params) {
            params.push([name, this.params[name]]);
        }

        // Let each input component push parameters
        for (var input of this.inputs()) {
            if (input.vComponent) {
                input.vComponent.prepareSubmit(form, params);
            }
        }

        // Let each input component validate itself
        var errors = [];
        for (let input of this.inputs()) {
            if (input.vComponent) {
                var result = input.vComponent.validate(form, params);
                if (result !== true) {
                    errors.push(result);
                }
            }
        }

        // Build Form data
        for(let param of params){
            FD.append(param[0], param[1]);
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