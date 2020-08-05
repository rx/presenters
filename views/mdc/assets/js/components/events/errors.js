import 'core-js/features/array/flat';

/**
 * mapObject transforms an object's key-value pairs via the provided function.
 * @param {Object} object
 * @param {Function} fn A mapping function suitable for use with Array.map
 * @return {Object}
 */
function mapObject(object, fn) {
    return Object.entries(object)
        .map(fn)
        .reduce((obj, [k, v]) => Object.assign(obj, {[[k]]: v}), {});
}

/*
    Attempt to interpret and serialize the following cases for display:

    A: Rails errors:
        1. { "name": ["Requires name"] }

    B: Validation errors:
        1. { :email => ["must be filled"] }
        2. { :fees => 0 => { :fee => ["must be filled", "must be greater than zero"] } }

    C: Custom errors and client-side exceptions:
        1. { :email => "must be filled" }
        2. { exception: 'Something bad happened' }

    D: Logical errors:
        1. "undefined method `map' for nil:NilClass"
 */

export class VErrors {
    constructor(root, target) {
        this.root = root;
        this.target = target;
    }

    clearErrors() {
        const errorMessages = this.root.querySelectorAll('.v-error-message');

        for (let i = 0; i < errorMessages.length; i++) {
            errorMessages[i].remove();
        }
    }

    /**
     * normalize attempts to convert the various error structures described
     * above into a single consistent structure by replacing error arrays
     * with joined strings.
     * @param {Object} errors
     * @return {Object}
     */
    normalize(errors) {
        if (!errors) {
            return {};
        }

        // Normalize case D into case C-1:
        if (typeof errors === 'string') {
            errors = {error: errors};
        }

        return mapObject(errors, ([k, v]) => {
            let result = null;

            // Case C, a single key-value pair:
            if (typeof v === 'string') {
                // Normalize case C into case A/B-1:
                v = [v];
            }

            if (Array.isArray(v)) {
                // Case A and B-1: an array of error messages:
                result = v.join(', ');
            } else if (v.constructor === Object) {
                // Case B-2: a nested structure:
                result = this.normalize(v);
            } else {
                throw new Error(`Cannot normalize value of type ${typeof v}`);
            }

            return [k, result];
        });
    }

    /**
     * flatten attempts to extract all human-readable error messages from an
     * arbitrary error structure, yielding a flat array of strings.
     * @param {Object} errors
     * @return {Array<String>}
     */
    flatten(errors) {
        if (!errors) {
            return [];
        }

        // Normalize case D into case C-1:
        if (typeof errors === 'string') {
            errors = {error: errors};
        }

        const object = mapObject(errors, ([k, v]) => {
            let result = null;

            if (typeof v === 'string') {
                result = v;
            }
            else if (v.constructor === Object) {
                result = this.flatten(v);
            }
            else {
                throw new Error(`Cannot flatten value of type ${typeof v}`);
            }

            return [k, result];
        });

        return Object.values(object).flat();
    }

    displayErrors(result) {
        const {statusCode, contentType, content} = result;

        let responseErrors = null;

        if (contentType && contentType.includes('application/json')) {
            responseErrors = JSON.parse(content);
        }
        else if (contentType && contentType.includes('v/errors')) {
            responseErrors = content;
        }

        if (responseErrors) {
            if (!Array.isArray(responseErrors)) {
                responseErrors = [responseErrors];
            }

            for (const response of responseErrors) {
                const normalizedResponse = this.normalize(response);
                const errors = normalizedResponse.errors ? normalizedResponse.errors : normalizedResponse;
                if (errors.constructor === String) {
                    this.prependErrors([errors]);
                }
                else {
                    for (const key in errors) {
                        if (!this.displayInputError(key, errors[key])) {
                            // If not handled at the field level, display at the page level
                            if (errors[key].length > 0) {
                                this.prependErrors([errors[key]]);
                            }
                        }
                    }
                }
            }
        }
        else if (statusCode === 0) {
            this.prependErrors(
                ['Unable to contact server. Please check that you are online and retry.']
            );
        }
        else {
            this.prependErrors(
                [`The server returned an unexpected response! Status: ${statusCode}`]
            );
        }
    }

    // Sets the helper text on the field
    // Returns true if it was able to set the error on the control
    displayInputError(id, message) {
        const currentEl = this.root.getElementById(id) || this.root.getElementsByName(id)[0];

        if (!currentEl) {
            return false;
        }

        const helperText = this.root.getElementById(`${currentEl.id}-helper-text`);
        if (!helperText) {
            return false;
        }

        helperText.innerHTML = message;
        currentEl.classList.add('mdc-text-field--invalid');
        helperText.classList.add('mdc-text-field-helper-text--validation-msg');
        helperText.classList.remove('v-hidden');

        return true;
    }

    // Creates a div before the element with the same id as the error
    // Used to display an error message without their being an input field to
    // attach the error to
    prependErrors(messages) {
        const errorsDiv = this.findNearestErrorDiv();

        if (!errorsDiv) {
            console.error('Unable to display Errors! ', messages);

            return false;
        }

        const newDiv = document.createElement('div');

        newDiv.classList.add('v-error-message');
        newDiv.insertAdjacentHTML('beforeend', messages.join('<br>'));

        // add the newly created element and its content into the DOM
        if (errorsDiv.clientTop < 10) {
            errorsDiv.scrollIntoView();
        }

        errorsDiv.insertAdjacentElement('beforebegin', newDiv);

        return true;
    }

    findNearestErrorDiv() {
        if (this.target) {
            return this.target.closest('.v-errors');
        }

        return this.root.querySelector('.v-errors');
    }
}
