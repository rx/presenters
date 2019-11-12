import {VBase} from './base';
import appConfig from '../../config';
import {expandParams} from './action_parameter';
import {encode} from './encode';
import {getEventTarget} from '../get_event_target';

// Replaces a given element with the contents of the call to the url.
// parameters are appended.
export class VPosts extends VBase {
    constructor(options, url, params, method, event, root) {
        super(options, root);
        this.url = url;
        this.params = params;
        this.method = method;
        this.event = event;
        this.headers = options.headers;
    }

    call(results, eventParams) {
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

        const ev = new CustomEvent('V:postStarted', {
            bubbles: true,
            cancelable: false,
            detail: this,
            composed: true,
        });
        const target = getEventTarget(this.event);
        target.dispatchEvent(ev);
        // Manually build the FormData.
        // Passing in a <form> element (if available) would skip over
        // unchecked toggle elements, which would be unexpected if the user
        // has specified a value for the toggle's `off_value` attribute.
        const formData = new FormData();

        // NB: `inputValues` will appropriately handle `input_tag`.
        for (const [name, value] of this.inputValues()) {
            formData.append(name, value);
        }

        if (eventParams){
            for (const [name, value] of Object.entries(eventParams)) {
                formData.append(name, value);
            }
        }

        // Add params from presenter:
        const expandedParams = expandParams(results, this.params);

        for (const [name, value] of Object.entries(expandedParams)) {
            formData.append(name, encode(value));
        }

        const paramCount = Array.from(formData).length;

        if (paramCount < 1) {
            console.warn(
                'Creating request with no data!'
                + ' Are you sure you\'ve hooked everything up correctly?',
            );
        }

        const httpRequest = new XMLHttpRequest();
        const url = this.url;
        const callHeaders = this.headers;
        const root = this.root;
        const vEvent = this;
        if (!httpRequest) {
            throw new Error(
                'Cannot talk to server! Please upgrade your browser to one that supports XMLHttpRequest.');
        }

        const snackbarCallback = function(contentType, response) {
            const element = root.querySelector('.mdc-snackbar');

            if (!(element && element.vComponent)) {
                return;
            }

            const snackbar = element.vComponent;

            if (contentType && contentType.includes('application/json')) {
                const messages = JSON.parse(response).messages;

                if (messages && messages.snackbar) {
                    const message = messages.snackbar.join('<br/>');

                    if (message !== '') {
                        snackbar.display(message);
                    }
                }
            }
        };

        return new Promise(function(resolve, reject) {
            httpRequest.onreadystatechange = function(event) {
                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    const contentType = this.getResponseHeader('content-type');
                    console.debug(httpRequest.status + ':' + contentType);

                    const result = {
                        action: 'posts',
                        method: this.method,
                        statusCode: httpRequest.status,
                        contentType: contentType,
                        content: httpRequest.responseText,
                        responseURL: httpRequest.responseURL,
                    };


                    var postFailed = httpRequest.status >= 400;
                    const ev = new CustomEvent(postFailed ? 'V:postFailed' : 'V:postSucceeded', {
                        bubbles: true,
                        cancelable: false,
                        detail: {event: vEvent, result: result},
                        composed: true,
                    });
                    target.dispatchEvent(ev);

                    if (httpRequest.status >= 200 && httpRequest.status < 300) {
                        results.push(result);
                        snackbarCallback(contentType,
                            httpRequest.responseText);
                        resolve(results);
                    }
                    // Response is an html error page
                    else if (contentType && contentType.indexOf('text/html') !== -1) {
                        root.open(contentType);
                        root.write(httpRequest.responseText);
                        root.close();
                        results.push(result);
                        resolve(results);
                    }
                    else {
                        results.push(result);
                        reject(results);
                    }
                    const evFinished = new CustomEvent('V:postFinished', {
                        bubbles: true,
                        cancelable: false,
                        detail: {event: vEvent, result: result},
                        composed: true,
                    });
                    target.dispatchEvent(evFinished);
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
            httpRequest.send(formData);
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
