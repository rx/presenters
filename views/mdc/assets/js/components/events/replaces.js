import {VSnackbar} from '../snackbar';
import {VBase} from './base';
import {initialize} from '../initialize';

// Replaces a given element with the contents of the call to the url.
// parameters are appended.
export class VReplaces extends VBase {
    constructor(options, url, params, event) {
        super(options);
        this.element_id = options.target;
        this.url = url;
        this.params = params;
        this.event = event;
    }

    call(results) {
        this.clearErrors();

        var httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            throw new Error('Cannot talk to server! Please upgrade your browser to one that supports XMLHttpRequest.');
        }
        var elementId = this.element_id;
        var url = this.buildURL(this.url, this.params, this.inputValues(), [['grid_nesting', this.options.grid_nesting]]);

        var promiseObj = new Promise(function (resolve, reject) {
            httpRequest.onreadystatechange = function () {
                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    console.log(httpRequest.status + ':' + this.getResponseHeader('content-type'));
                    if (httpRequest.status === 200) {
                        var nodeToReplace = document.getElementById(elementId);
                        nodeToReplace.outerHTML = httpRequest.responseText;
                        var newNode = document.getElementById(elementId);
                        initialize(newNode);

                        results.push({
                            action: 'replaces',
                            statusCode: httpRequest.status,
                            contentType: this.getResponseHeader('content-type'),
                            content: httpRequest.responseText
                        });
                        resolve(results);
                    } else {
                        results.push({
                            action: 'replaces',
                            statusCode: httpRequest.status,
                            contentType: this.getResponseHeader('content-type'),
                            content: httpRequest.responseText
                        });
                        reject(results);
                    }
                }
            };
            console.log('GET:' + url);
            httpRequest.open('GET', url, true);
            httpRequest.setRequestHeader('X-NO-LAYOUT', true);
            httpRequest.send();
        });
        return promiseObj;
    }
}
