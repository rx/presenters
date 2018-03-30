window.dialogPolyfill = require('./dialog-polyfill');
window.Liquid = require('liquidjs');
window.componentHandler = require('./material');

import {initButtons} from './components/button';
import {initDialogs} from './components/dialogs';
import {initTextFields} from './components/form-fields';
import {VEvents} from './components/events';
window.VEvents = VEvents;

document.addEventListener("DOMContentLoaded", function(event) {
    console.log('Initializing');
    initButtons();
    initDialogs();
    initTextFields();
  });


