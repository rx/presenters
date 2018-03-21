import {VSnackbar} from '../snackbar';
import {VBase} from './base';

// Replaces a given element with the contents of the call to the url.
// parameters are appended.
export class VPost extends VBase {
    constructor(url, params, method, parent) {
        super();
        this.url = url;
        this.params = params;
        this.method = method;
    }

    call() {
        this.clearErrors();

        var parent_element = document.getElementById(this.params.__parent_id__);
        var FD = null;
        if (this.isForm(parent_element)) {
            FD = new FormData(parent_element);
        } else {
            FD = new FormData();
            // Automatically pull values out of input controls
            if (this.params.__parent_id__) {
                var parent_element = document.getElementById(this.params.__parent_id__);
                if (parent_element) {
                    var value = parent_element.value;
                    if (value) {
                        FD.append(this.params.__parent_id__, value);
                    }
                }
            }
        }

        // Push our params into our FormData object
        for (var name in this.params) {
            if (name != '__parent_id__') {
                FD.append(name, this.params[name]);
            }
        }

        var httpRequest = new XMLHttpRequest();
        var method = this.method;
        var url    = this.url;
        if (!httpRequest) {
            throw new Error('Cannot talk to server! Please upgrade your browser to one that supports XMLHttpRequest.');
            // new VSnackbar('Cannot talk to server! Please upgrade your browser to one that supports XMLHttpRequest.').display();
        }
        var promiseObj = new Promise(function (resolve, reject) {
            httpRequest.onreadystatechange = function (event) {
                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    console.log(httpRequest.status + ':' + this.getResponseHeader('content-type') + ':' + httpRequest.responseText);
                    if (httpRequest.status>=200 && httpRequest.status<300) {
                        resolve([httpRequest.status, this.getResponseHeader('content-type'), httpRequest.responseText]);
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
        return promiseObj;
    }

    isForm(parent_element) {
        return parent_element && parent_element.elements;
    }
}