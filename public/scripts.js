// Hookup Dialogs
document.addEventListener("DOMContentLoaded", function (event) {
    'use strict';
    var docDialogButtons = document.querySelectorAll('.vml-js-dialog-button');
    for (var i = 0; i < docDialogButtons.length; i++) {
        var button = docDialogButtons[i];
        var dialog = document.querySelector('#' + button.dataset.dialogId);
        if (!dialog.showModal) {
            dialogPolyfill.registerDialog(dialog);
        }

        button.addEventListener('click', function (event) {
            var button = event.target;
            var dialogId = button.dataset.dialogId;
            var dialog = document.querySelector('#' + dialogId);
            dialog.showModal();
        });

        var dialogButtons = dialog.querySelectorAll('button:not([disabled])');
        for (var i = 0; i != dialogButtons.length; i++) {
            dialogButtons[i].addEventListener('click', function () {
                dialog.close();
            });
        }
    }
});

// This class displays a page level message
class VSnackbar {
    constructor(message, action_text, action_fn) {
        this.message = message;
        this.action_text = action_text;
        this.action_fn = action_fn;
    }

    display() {
        'use strict';
        var snackbarContainer = document.querySelector('#snackbar');
        var data = {
            message: this.message,
            timeout: 2000,
            actionHandler: this.action_fn,
            actionText: this.action_text
        };
        componentHandler.upgradeElement(snackbarContainer);
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
    }
}

class VEvents {
    //[[type, url, target, params]]
    constructor(actions) {
        this.actions = actions.map((action) => {
            return this.constructor.action_class(action);
    })
        ;
    }

    call() {
        this.actions.forEach((element) => {
            element.call();
    })
        ;
    }

    static action_class(action) {
        var action_type = action[0];
        var url = action[1];
        var target = action[2];
        var params = action[3];

        switch (action_type) {
            case 'loads':
                return new VLoadsPage(url);
            case 'replaces':
                return new VReplaceElement(target, url, params);
            case 'post':
                return new VPost(url, params, 'POST');
            case 'update':
                return new VPost(url, params, 'PUT');
            case 'delete':
                return new VPost(url, params, 'DELETE');
            default:
                throw action_type + ' is not supported.';
        }
    }

}

class VLoadsPage {
    constructor(url) {
        this.url = url;
    }

    call() {
        location.assign(this.url);
    }
}

class Base {

    clearErrors() {
        var errorMessages = document.querySelectorAll('.mdv-error-message');

        for (var i = 0; i < errorMessages.length; i++) {
            errorMessages[i].remove();
        }
    }

    displayError(content_type, response) {
        var errors = JSON.parse(response);
        for (var field in errors) {
            this.prependError(field, errors[field])
        }

    }

    prependError(div_id, message) {
        // create a new div element
        var newDiv = document.createElement("div");
        newDiv.className = 'mdv-error-message';
        // and give it some content
        var newContent = document.createTextNode(message);
        // add the text node to the newly created div
        newDiv.appendChild(newContent);

        // add the newly created element and its content into the DOM
        var currentDiv = document.getElementById(div_id);

        currentDiv.parentElement.insertBefore(newDiv, currentDiv);
    }
}

// Replaces a given element with the contents of the call to the url.
// parameters are appended.
class VReplaceElement extends Base {
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


// Replaces a given element with the contents of the call to the url.
// parameters are appended.
class VPost extends Base {
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
            FD.append(name, this.params[name]);
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

// TODO Create POST that uses the wrapping form
// window.addEventListener("load", function () {
//   function sendData() {
//     var XHR = new XMLHttpRequest();
//
//     // Bind the FormData object and the form element
//     var FD = new FormData(form);
//
//     // Define what happens on successful data submission
//     XHR.addEventListener("load", function(event) {
//       alert(event.target.responseText);
//     });
//
//     // Define what happens in case of error
//     XHR.addEventListener("error", function(event) {
//       alert('Oups! Something goes wrong.');
//     });
//
//     // Set up our request
//     XHR.open("POST", "https://example.com/cors.php");
//
//     // The data sent is what the user provided in the form
//     XHR.send(FD);
//   }
//
//   // Access the form element...
//   var form = document.getElementById("myForm");
//
//   if(form) {
//       // ...and take over its submit event.
//       form.addEventListener("submit", function (event) {
//           event.preventDefault();
//
//           sendData();
//       });
//   }
// });

  