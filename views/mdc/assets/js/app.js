require('material-design-lite/material');
require('mdl-stepper/stepper');
window.dialogPolyfill = require('./dialog-polyfill');
import {initialize} from './components/initialize';

document.addEventListener("DOMContentLoaded", function(event) {
    initialize();
  });



