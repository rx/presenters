import {VSnackbar} from '../snackbar';
import {VBase} from './base';

// Replaces a given element with the contents of the call to the url.
// parameters are appended.
export class VReplaceElement extends VBase {
    constructor(element_id, url, params) {
        super();
        this.element_id = element_id;
        this.url = url;
        this.params = params;
        this.httpRequest = new XMLHttpRequest();
    }

    call() {
        if (!this.httpRequest) {
            new VSnackbar('Cannot talk to server! Please upgrade your browser to one that supports XMLHttpRequest.').display();
            return false;
        }
        this.clearErrors();
        var _this_ = this;

        this.httpRequest.onreadystatechange = function () {
            if (_this_.httpRequest.readyState === XMLHttpRequest.DONE) {
                if (_this_.httpRequest.status === 200) {
                    var node_to_replace = document.getElementById(_this_.element_id);
                    node_to_replace.outerHTML = _this_.httpRequest.responseText;
                } else {
                    new VSnackbar('There was a problem with the request.').display();
                }
            }
        };
        var url = this.url + this.seperator() + this.serialize(this.params);
        console.log('GET:' + url);
        this.httpRequest.open('GET', url, true);
        this.httpRequest.setRequestHeader('X-NO-LAYOUT', true);
        this.httpRequest.send();
    }

    seperator() {
        return this.url.includes("?") ? '&' : '?';
    }

    serialize(obj, prefix) {
        var str = [],
            p;
        for (p in obj) {
            if (obj.hasOwnProperty(p)) {
                var k = prefix ? prefix + "[" + p + "]" : p,
                    v = obj[p];
                str.push((v !== null && typeof v === "object") ?
                    this.serialize(v, k) :
                    encodeURIComponent(k) + "=" + encodeURIComponent(v));
            }
        }
        return str.join("&");
    }
}
