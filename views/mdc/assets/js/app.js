import isCompatible from './utils/compatibility';

document.addEventListener('DOMContentLoaded', () => {
    if (!isCompatible) {
        return;
    }

    const initialize = require('./components/initialize').initialize;

    window.dialogPolyfill = require('./dialog-polyfill');
    require('material-design-lite/material');
    require('./mdl-stepper');

    initialize();
});
