import {VBase} from './base';
import appConfig from '../../config';
import {expandParams} from './action_parameter';
import {encode} from './encode';
import {eventRoot} from './event_root';


// Replaces a given element with the contents of the call to the url.
// parameters are appended.
export class VPosts extends VBase {
    constructor(options, url, params, method, event) {
        super(options);
        this.url = url;
        this.params = params;
        this.method = method;
        this.event = event;
        this.headers = options.headers;
    }

    call(results) {
        this.clearErrors();
        let errors = this.validate();
        let method = this.method;
        if (errors.length > 0) {
            return new Promise(function(_, reject) {
                results.push({
                    action: 'posts',
                    method: method,
                    statusCode: 400,
                    contentType: 'v/errors',
                    content: errors,
                });
                reject(results);
            });
        }

        var FD = null;
        var form = this.form();
        if (form) {
            FD = new FormData(form);
        }
        else {
            FD = new FormData();
        }
        // Add params from presenter
        expandParams(results, this.params);
        for (const name in this.params) {
            FD.append(name, encode(this.params[name]));
        }

        var inputValues = this.inputValues();
        for (var input of inputValues) {
            FD.append(input[0], input[1]);
        }

        const httpRequest = new XMLHttpRequest();
        const url = this.url;
        const callHeaders = this.headers;
        const event = this.event;
        if (!httpRequest) {
            throw new Error(
                'Cannot talk to server! Please upgrade your browser to one that supports XMLHttpRequest.');
        }

        const snackbarCallback = function(contentType, response) {
            const snackbar = eventRoot(event).querySelector('.mdc-snackbar');

            if (!(snackbar && snackbar.vComponent)) {
                return;
            }

            const snackbarComponent = snackbar.vComponent;

            if (contentType && contentType.includes('application/json')) {
                const messages = JSON.parse(response).messages;

                if (messages && messages.snackbar) {
                    const message = messages.snackbar.join('<br>');

                    if (message !== '') {
                        snackbarComponent.display(message);
                    }
                }
            }
        };

        return new Promise(function(resolve, reject) {
            httpRequest.onreadystatechange = function(event) {
                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    const contentType = this.getResponseHeader('content-type');
                    console.log(httpRequest.status + ':' + contentType);
                    if (httpRequest.status >= 200 && httpRequest.status < 300) {
                        results.push({
                            action: 'posts',
                            method: this.method,
                            statusCode: httpRequest.status,
                            contentType: contentType,
                            content: httpRequest.responseText,
                            responseURL: httpRequest.responseURL,
                        });
                        snackbarCallback(contentType,
                            httpRequest.responseText);
                        resolve(results);
                        // Response is an html error page
                    }
                    else if (contentType && contentType.indexOf('text/html') !==
                        -1) {
                        eventRoot(event).open(contentType);
                        eventRoot(event).write(httpRequest.responseText);
                        eventRoot(event).close();
                        results.push({
                            action: 'posts',
                            method: this.method,
                            statusCode: httpRequest.status,
                            contentType: contentType,
                            content: httpRequest.responseText,
                            responseURL: httpRequest.responseURL,
                        });
                        resolve(results);
                    }
                    else {
                        results.push({
                            action: 'posts',
                            method: this.method,
                            statusCode: httpRequest.status,
                            contentType: contentType,
                            content: httpRequest.responseText,
                        });
                        reject(results);
                    }
                }
            };
            // Set up our request
            httpRequest.open(method, url);

            const configHeaders = appConfig.get('request.headers.POST', {});

            for (const [key, value] of Object.entries(configHeaders)) {
                httpRequest.setRequestHeader(key, value);
            }

            if (callHeaders) {
                for (const [key, value] of Object.entries(callHeaders)) {
                    httpRequest.setRequestHeader(key, value);
                }
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
