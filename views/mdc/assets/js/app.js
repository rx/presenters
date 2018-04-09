window.dialogPolyfill = require('./dialog-polyfill');
window.componentHandler = require('./material');

import {initialize} from './components/initialize';

document.addEventListener("DOMContentLoaded", function(event) {
    initialize();
  });


