/* global require */

import {initialize} from './components/initialize';

// The Adapter is required when transpiling classes to ES5 code.
// https://github.com/webcomponents/webcomponentsjs/tree/v2.2.7#custom-elements-es5-adapterjs
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';

// Webcomponent polyfil
window.WebComponents = window.WebComponents || {};
window.WebComponents.root = require(
    '../../node_modules/@webcomponents/webcomponentsjs/');

function loadFont(src) {
    const lnk = document.createElement('link');
    lnk.setAttribute('href', src);
    lnk.setAttribute('rel', 'stylesheet');
    lnk.setAttribute('type', 'text/css');
    document.head.appendChild(lnk);
}

// https://stackoverflow.com/questions/54546007/why-doesnt-font-awesome-work-in-my-shadow-dom
loadFont('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
loadFont('https://fonts.googleapis.com/icon?family=Material+Icons');
loadFont('https://use.fontawesome.com/releases/v5.4.1/css/all.css');

class FlowMatic extends HTMLElement {
    constructor() {
        super();
    }

    loadComponent() {
        const oReq = new XMLHttpRequest();
        oReq.addEventListener('load', (r) => {
            const template = document.createElement('template');
            template.innerHTML = oReq.responseText;
            const templateContent = template.content;

            this.attachShadow({mode: 'open'}).
                appendChild(templateContent.cloneNode(true));
            initialize(this.shadowRoot, true);

            const event = new CustomEvent('flow-matic-loaded', { bubbles: true });
            this.dispatchEvent(event);
        });
        oReq.open('GET', `${this.dataset.comp}`);
        oReq.send();
    }

    static get observedAttributes() {
        // A list of attribute names to observe via attributeChangedCallback.
        return ['data-comp'];
    }

    attributeChangedCallback() {
        if (this.dataset.comp) {
            this.loadComponent();
        }

    }
}

require('material-design-lite/material');
customElements.define('flow-matic', FlowMatic);
