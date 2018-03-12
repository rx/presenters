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
        this.httpRequest = new XMLHttpRequest();
    }

    call() {
        if (!this.httpRequest) {
            new VSnackbar('Cannot talk to server! Please upgrade your browser to one that supports XMLHttpRequest.').display();
            return false;
        }
        this.clearErrors();

        var FD = new FormData();
        var _this_ = this;

        // Push our data into our FormData object
        for (var name in this.params) {
            if(name != '__parent_id__') {
                FD.append(name, this.params[name]);
            }
        }
        // Automatically pull values out of edit controls
        if(this.params.__parent_id__){
            var parent_element = document.getElementById(this.params.__parent_id__);
            if(parent_element) {
                var value = parent_element.value;
                if (value) {
                    FD.append(this.params.__parent_id__, value);
                }
            }
        }

        this.httpRequest.onreadystatechange = function (event) {
            if (_this_.httpRequest.readyState === XMLHttpRequest.DONE) {
                if (_this_.httpRequest.status >= 200 && _this_.httpRequest.status < 300) {
                    new VSnackbar('Yeah! That worked!').display();
                    console.log(_this_.httpRequest.status + ':' + this.getResponseHeader('content-type') + ':' + event.target.responseText);
                } else {
                    new VSnackbar('There was a problem with the request.').display();
                    console.log(_this_.httpRequest.status + ':' + this.getResponseHeader('content-type') + ':' + event.target.responseText);
                    _this_.displayError(this.getResponseHeader('content-type'), event.target.responseText);
                }
            }
        };

        // Set up our request
        this.httpRequest.open(this.method, this.url);

        console.log(this.method + ':' + this.url);
        // Send our FormData object; HTTP headers are set automatically
        this.httpRequest.send(FD);
    }
}