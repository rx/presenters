require('material-design-lite/material');
require('./mdl-stepper');
window.dialogPolyfill = require('./dialog-polyfill');
import {initialize} from './components/initialize';
require('babel-polyfill');

document.addEventListener("DOMContentLoaded", function(event) {
    initialize();
  });



