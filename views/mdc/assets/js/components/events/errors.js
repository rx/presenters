export class VErrors {
    constructor(event) {
        this.event = event;
    }

    clearErrors() {
        var errorMessages = document.querySelectorAll('.v-error-message');

        for (var i = 0; i < errorMessages.length; i++) {
            errorMessages[i].remove();
        }
    }

    // Rails errors
    // {
    //   "name": [
    //     "Requires name"
    //   ]
    // }

    // Validation errors
    // { :email => ["must be filled"] }

    // Custom errors
    // { :email => "must be filled" }

    // Exceptions
    // {exception: 'Something bad happened' }

    stringsToArrays(value) {
        if (Array.isArray(value) || value.constructor === Object) {
            return value;
        }
        return new Array(value);
    }

    normalizeErrors(errors) {
        if (errors && errors.constructor === Object) {
            return Object.keys(errors).reduce((previous, key) => {
                previous[key] = this.stringsToArrays(errors[key]);
                return previous;
            }, {});
        }
        return [];
    }

    // [http_status, content_type, resultText]
    displayErrors(result) {
        var httpStatus = result.statusCode;
        var contentType = result.contentType;
        var resultText = result.content;

        var responseErrors = null;

        if (contentType && contentType.indexOf("application/json") !== -1) {
            responseErrors = JSON.parse(resultText);
        } else if (contentType && contentType.indexOf("v/errors") !== -1) {
            responseErrors = resultText;
        }

        if (responseErrors) {
            if (!Array.isArray(responseErrors)) {
                responseErrors = [responseErrors];
            }
            for (var response of responseErrors) {
                var pageErrors = Object.values(this.normalizeErrors(response)).reduce(function (previous, value) {
                    if (Array.isArray(value) && value.length > 0) {
                        previous.push(value.join('<br/>'));
                    }
                    return previous;
                }, []);
                var fieldErrors = this.normalizeErrors(response.errors);

                for (var field in fieldErrors) {
                    if (!this.displayInputError(field, fieldErrors[field])) {
                        // Collect errors that can't be displayed at the field level
                        pageErrors.push(fieldErrors[field]);
                    }
                }
                this.prependErrors(pageErrors);
            }
        } else if (httpStatus === 0) {
            this.prependErrors(["Unable to contact server. Please check that you are online and retry."]);
        } else  {
            this.prependErrors(["The server returned an unexpected response! Status:" + httpStatus]);
        }
    }

    // Sets the helper text on the field
    // Returns true if it was able to set the error on the control
    displayInputError(divId, messages) {
        var currentEl = document.getElementById(divId);
        if (currentEl && currentEl.mdcComponent) {
            currentEl.mdcComponent.helperTextContent = messages.join(', ');
            var helperText = document.getElementById(divId + '-input-helper-text');
            helperText.classList.add('mdc-text-field--invalid',
                'mdc-text-field-helper-text--validation-msg',
                'mdc-text-field-helper-text--persistent');
            currentEl.mdcComponent.valid = false;
            return true;
        }
        return false;
    }

    // Creates a div before the element with the same id as the error
    // Used to display an error message without their being an input field to attach the error to
    prependErrors(messages) {
        var errorsDiv = this.findNearestErrorDiv();
        // create a new div element
        var newDiv = document.createElement("div");
        newDiv.className = 'v-error-message';
        // and give it some content

        for (var message of messages) {
            var newContent = document.createTextNode(message);
            newDiv.appendChild(newContent);
            let br = document.createElement('br');
            // add the text node to the newly created div
            newDiv.appendChild(br);
        }

        // add the newly created element and its content into the DOM
        if (errorsDiv) {
            errorsDiv.scrollIntoView();
            errorsDiv.parentElement.insertBefore(newDiv, errorsDiv);
            return true;
        } else {
            console.error("Unable to display Errors! ", messages);
        }
        return false;
    }

    findNearestErrorDiv() {
        let errorsDiv = null;
        const currentDiv = this.event.target;
        if(currentDiv) {
            errorsDiv = currentDiv.closest('.v-errors')
        }else{
            errorsDiv = document.querySelector('.v-errors');
        }
        return errorsDiv;
    }
}
