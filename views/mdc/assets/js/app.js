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

    window.dialogPolyfill = require('./dialog-polyfill');
    require('material-design-lite/material');
    require('./mdl-stepper');
    require('babel-polyfill');

    require('./components/initialize').initialize();
});
