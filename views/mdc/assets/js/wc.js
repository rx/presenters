import {initialize} from './components/initialize';

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
        });
        oReq.open('GET', `${this.dataset.comp}`);
        oReq.send();
    }

    createdCallback() {
        console.log('flow-matic element added to page.');
        if (!this.dataset.comp) {
            // Select the node that will be observed for mutations
            const targetNode = this;

            // Options for the observer (which mutations to observe)
            const config = {attributes: true};

            const loadComponent = () => {
                this.loadComponent();
            };
            // Callback function to execute when mutations are observed
            const callback = function(mutationsList, observer) {
                for (const mutation of mutationsList) {
                    if (mutation.type === 'attributes' &&
                        mutation.attributeName === 'data-comp') {
                        console.log('The ' + mutation.attributeName +
                            ' attribute was modified.');
                        loadComponent(targetNode);
                        observer.disconnect();
                    }
                }
            };

            // Create an observer instance linked to the callback function
            const observer = new MutationObserver(callback);

            // Start observing the target node for configured mutations
            observer.observe(targetNode, config);
        }
        else {
            this.loadComponent(this);
        }

    }
}

document.registerElement('flow-matic', FlowMatic);
