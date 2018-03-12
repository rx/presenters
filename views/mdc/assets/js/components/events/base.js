export class VBase {

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
