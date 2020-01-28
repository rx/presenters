
import isCompatible from './utils/compatibility';
import config from './config';

document.addEventListener('DOMContentLoaded', () => {
    if (!isCompatible) {
        const errorMessage = config.get(
            'compatibility.errorMessage',
            'Unsupported browser!',
        );

        document.body.innerHTML = `<p>${errorMessage}</p>`;

        return;
    }

    document.documentElement.classList.remove('incompatible-browser');

    require('material-design-lite/material');
    require('./mdl-stepper');
    require('idempotent-babel-polyfill');

    require('./components/initialize').initialize(document, true);

    // Focus first valid input control
    const focusable = document.querySelectorAll('.v-focusable');
    for (var i = 0; i < focusable.length; i++) {
        if (focusable[i] && focusable[i].vComponent) {
            if (focusable[i].vComponent.focus()) {
                break;
            }
        }
    }
});
