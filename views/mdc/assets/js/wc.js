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

            this.attachShadow({mode: 'open'}).
                appendChild(template.content);

            this.loadScripts(this.shadowRoot)
                .then(() => {
                    initialize(this.shadowRoot, true);
                });

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

    // Scripts that are part of the response and stuck into a template with innerHTML
    // won't be parsed.  On top of that js from a plugin that has a remote dependency
    // was being parsed before the remote script was loaded (everything was treated async).
    // This function collects a promise for each remote script and once they're all loaded
    // it adds the inline scripts.
    loadScripts(root) {
        if (window.FLOW_MATIC_SCRIPTS_LOADED) {
          return Promise.resolve();
        } else {
          window.FLOW_MATIC_SCRIPTS_LOADED = true;
        }

        const scripts = Array.from(root.querySelectorAll('script'));
        const remoteScripts = scripts.filter((s) => { return s.hasAttribute('src'); });
        const inlineScripts = scripts.filter((s) => { return !remoteScripts.includes(s); });
        // load remote scripts
        const remoteScriptPromises = remoteScripts.map((script) => {
            return new Promise((resolve) => {
                const newScript = this.loadScript(script);
                newScript.addEventListener('load', () => {
                  resolve();
                });
            });
        });

        // When all remote scripts are done, load inlines
        return Promise.all(remoteScriptPromises).then(() => {
            inlineScripts.forEach(this.loadScript);
        });
    }

    // Browsers don't evaluate <script>s from innerHTML, so we need to add each of them.
    // https://stackoverflow.com/questions/1197575/can-scripts-be-inserted-with-innerhtml
    loadScript(script) {
        const newScript = document.createElement('script');
        for (var i = 0; i < script.attributes.length; i++) {
            newScript.setAttribute(script.attributes[i].nodeName, script.attributes[i].nodeValue);
        }
        newScript.innerHTML = script.innerHTML;
        document.head.appendChild(newScript);
        document.head.removeChild(newScript);
        return newScript;
    }
}

require('material-design-lite/material');
customElements.define('flow-matic', FlowMatic);
