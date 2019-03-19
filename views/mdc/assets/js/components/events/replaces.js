import {expandParams} from './action_parameter';
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
            throw new Error(
                'Cannot talk to server! Please upgrade your browser to one that supports XMLHttpRequest.');
        }
        var elementId = this.element_id;
        var nodeToReplace = document.getElementById(elementId);
        expandParams(results, this.params);
        var url = this.buildURL(this.url, this.params, this.inputValues(),
            [['grid_nesting', this.options.grid_nesting]]);
        let delayAmt = this.event instanceof InputEvent ? 500 : 0;

        var promiseObj = new Promise(function(resolve, reject) {
            if (!nodeToReplace) {
                let msg = 'Unable to located node: \'' + elementId + '\'' +
                    ' This usually the result of issuing a replaces action and specifying a element id that does not currently exist on the page.';
                console.error(msg);
                results.push({
                    action: 'replaces',
                    statusCode: 500,
                    contentType: 'v/errors',
                    content: {exception: msg},
                });
                reject(results);
            }
            else {
                clearTimeout(nodeToReplace.vTimeout);
                nodeToReplace.vTimeout = setTimeout(function() {
                    httpRequest.onreadystatechange = function() {
                        if (httpRequest.readyState === XMLHttpRequest.DONE) {
                            console.log(httpRequest.status + ':' +
                                this.getResponseHeader('content-type'));
                            if (httpRequest.status === 200) {
                                const nodeToReplace = document.getElementById(
                                    elementId);
                                const newDiv = document.createElement('div');
                                newDiv.innerHTML = httpRequest.responseText;
                                nodeToReplace.parentElement.replaceChild(newDiv,
                                    nodeToReplace);
                                initialize(newDiv);

                                results.push({
                                    action: 'replaces',
                                    statusCode: httpRequest.status,
                                    contentType: this.getResponseHeader(
                                        'content-type'),
                                    content: httpRequest.responseText,
                                });
                                resolve(results);
                            }
                            else {
                                results.push({
                                    action: 'replaces',
                                    statusCode: httpRequest.status,
                                    contentType: this.getResponseHeader(
                                        'content-type'),
                                    content: httpRequest.responseText,
                                });
                                reject(results);
                            }
                        }
                    };
                    console.log('GET:' + url);
                    httpRequest.open('GET', url, true);
                    httpRequest.setRequestHeader('X-NO-LAYOUT', true);
                    httpRequest.send();
                }, delayAmt);
            }
        });
        return promiseObj;
    }

}
