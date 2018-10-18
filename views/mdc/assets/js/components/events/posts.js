import {VSnackbar} from '../snackbar';
import {VBase} from './base';
import appConfig from '../../config';

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

    call(results) {
        this.clearErrors();
        let errors = this.validate();
        let method = this.method;
        if (errors.length > 0) {
            return new Promise(function (_, reject) {
                results.push({
                    action: 'posts',
                    method: method,
                    statusCode: 400,
                    contentType: 'v/errors',
                    content: errors
                });
                reject(results);
            });
        }

        var FD = null;
        var form = this.form();
        if (form) {
            FD = new FormData(form);
        } else {
            FD = new FormData();
        }
        // Add params from presenter
        for (var name in this.params) {
            FD.append(name, this.params[name]);
        }

        var inputValues = this.inputValues(form);
        for (var input of inputValues) {
            FD.append(input[0], input[1]);
        }

        var httpRequest = new XMLHttpRequest();
        var url = this.url;
        if (!httpRequest) {
            throw new Error('Cannot talk to server! Please upgrade your browser to one that supports XMLHttpRequest.');
        }
        return new Promise(function (resolve, reject) {
            httpRequest.onreadystatechange = function (event) {
                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    console.log(httpRequest.status + ':' + this.getResponseHeader('content-type'));
                    if (httpRequest.status >= 200 && httpRequest.status < 300) {
                        results.push({
                            action: 'posts',
                            method: this.method,
                            statusCode: httpRequest.status,
                            contentType: this.getResponseHeader('content-type'),
                            content: httpRequest.responseText,
                            responseURL: httpRequest.responseURL
                        });
                        resolve(results);
                    } else {
                        results.push({
                            action: 'posts',
                            method: this.method,
                            statusCode: httpRequest.status,
                            contentType: this.getResponseHeader('content-type'),
                            content: httpRequest.responseText
                        });
                        reject(results);
                    }
                }
            };
            // Set up our request
            httpRequest.open(method, url);

            const headers = appConfig.get('request.headers.POST', {});

            for (const [key, value] of Object.entries(headers)) {
                httpRequest.setRequestHeader(key, value);
            }

            // Send our FormData object; HTTP headers are set automatically
            httpRequest.send(FD);
        });
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
