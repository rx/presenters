import {VLoads} from './events/loads';
import {VPosts} from './events/posts';
import {VReplaces} from './events/replaces';
import {VDialog} from './events/dialog';
import {VErrors} from './events/errors';
import {VToggleVisibility} from './events/toggle_visibility';
import {VAutoComplete} from './events/autocomplete';
import {VPromptIfDirty} from './events/prompt_if_dirty';
import {VSnackbarEvent} from './events/snackbar';
import {VClears} from './events/clears';
import {VRemoves} from './events/removes';
import {VStepperEvent} from './events/stepper';
import {VNavigates} from './events/navigates';
import {VPluginEventAction} from './events/plugin';
import getRoot from './root_document';

const EVENTS_SELECTOR = '[data-events]';

export class VEvents {
    // [[type, url, target, params]]
    constructor(actions, event, root, vComponent) {
        this.event = event;
        this.root = root;
        this.actions = actions.map((action) => {
            return this.constructor.action_class(action, event, root);
        });
        this.vComponent = vComponent;
    }

    call() {
        const event = this.event;
        let eventParams;
        if (event.type === 'drop' && event.dataTransfer) {
            //console.log('Drop Data Params: ' + event.dataTransfer.getData('text/plain'));
            eventParams = JSON.parse(event.dataTransfer.getData('text/plain'));
        }

        // Adapted from http://www.datchley.name/promise-patterns-anti-patterns/#executingpromisesinseries
        const fnlist = this.actions.map((action) => {
            return function(results) {
                return Promise.resolve(action.call(results, eventParams));
            };
        });

        // Execute a list of Promise return functions in series
        function pseries(list) {
            const p = Promise.resolve([]);
            return list.reduce(function(pacc, fn) {
                return pacc = pacc.then(fn);
            }, p);
        }

        const ev = new CustomEvent('V:eventsStarted', {
            bubbles: true,
            cancelable: false,
            detail: this,
        });
        this.event.target.dispatchEvent(ev);

        if (this.vComponent) {
            this.vComponent.actionsStarted(this);
        }


        new VErrors(this.root).clearErrors();

        pseries(fnlist).then((results) => {
            const result = results.pop();
            const contentType = result.contentType;
            const responseURL = result.responseURL;

            if (contentType && contentType.indexOf('text/html') !== -1 &&
                typeof responseURL !== 'undefined') {
                window.location = responseURL;
            }

            const ev = new CustomEvent('V:eventsSucceeded', {
                bubbles: true,
                cancelable: false,
                detail: this,
            });
            this.event.target.dispatchEvent(ev);

            if (this.vComponent) {
                this.vComponent.actionsSucceeded(this);
            }
        }).catch((results) => {
            console.log('If you got here it may not be what you think:',
                results);

            let result = results;

            if (typeof results.pop === 'function') {
                result = results.pop();
            }

            if (!result.squelch) {
                new VErrors(this.root, this.event).displayErrors(result);
            }

            const ev = new CustomEvent('V:eventsHalted', {
                bubbles: true,
                cancelable: false,
                detail: this,
            });
            this.event.target.dispatchEvent(ev);

            if (this.vComponent) {
                this.vComponent.actionsHalted(this);
            }
        }).finally(() => {
            const ev = new CustomEvent('V:eventsFinished', {
                bubbles: true,
                cancelable: false,
                detail: this,
            });
            this.event.target.dispatchEvent(ev);

            if (this.vComponent) {
                this.vComponent.actionsFinished(this);
            }
        });
    }

    static action_class(action, event, root) {
        const action_type = action[0];
        const url = action[1];
        const options = action[2];
        const params = action[3];

        switch (action_type) {
            case 'loads':
                return new VLoads(options, url, params, event, root);
            case 'replaces':
                return new VReplaces(options, url, params, event, root);
            case 'post':
                return new VPosts(options, url, params, 'POST', event, root);
            case 'update':
                return new VPosts(options, url, params, 'PUT', event, root);
            case 'delete':
                return new VPosts(options, url, params, 'DELETE', event, root);
            case 'dialog':
                return new VDialog(options, params, event, root);
            case 'toggle_visibility':
                return new VToggleVisibility(options, params, event, root);
            case 'prompt_if_dirty':
                return new VPromptIfDirty(options, params, event, root);
            case 'remove':
                return new VRemoves(options, params, event, root);
            case 'snackbar':
                return new VSnackbarEvent(options, params, event, root);
            case 'autocomplete':
                return new VAutoComplete(options, url, params, event);
            case 'clear':
                return new VClears(options, params, event, root);
            case 'stepper':
                return new VStepperEvent(options, params, event, root);
            case 'navigates':
                return new VNavigates(options, params, event, root);
            default:
                return new VPluginEventAction(action_type, options, params,
                    event, root);
        }
    }
}

// This is used to get a proper binding of the actionData
// https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
function createEventHandler(actionsData, root, vComponent) {
    return function(event) {
        event.stopPropagation();
        new VEvents(actionsData, event, root, vComponent).call();
    };
}

function getEventElements(root) {
    const elements = Array.from(root.querySelectorAll(EVENTS_SELECTOR));

    // Include `root` if it has events:
    if (typeof root.matches === 'function' && root.matches(EVENTS_SELECTOR)) {
        elements.unshift(root);
    }

    return elements;
}

export function initEvents(e) {
    console.debug('\tEvents');

    for (const eventElem of getEventElements(e)) {
        var eventsData = JSON.parse(eventElem.dataset.events);
        for (var j = 0; j < eventsData.length; j++) {
            var eventData = eventsData[j];
            var eventName = eventData[0];
            var eventOptions = eventData[2];
            eventOptions.passive = true;
            var actionsData = eventData[1];
            const vComponent = eventElem.vComponent;
            var eventHandler = createEventHandler(actionsData, getRoot(e),
                vComponent);
            // allow override of event handler by component
            if (vComponent && vComponent.createEventHandler) {
                eventHandler = vComponent.createEventHandler(
                    actionsData, getRoot(e), vComponent);
            }
            // Delegate to the component if possible
            if (vComponent &&
                vComponent.initEventListener) {
                vComponent.initEventListener(eventName, eventHandler,
                    eventOptions);
            }
            else {
                if (typeof eventElem.eventsHandler === 'undefined') {
                    eventElem.eventsHandler = {};
                }
                if (typeof eventElem.eventsHandler[eventName] === 'undefined') {
                    eventElem.eventsHandler[eventName] = [];
                }
                eventElem.eventsHandler[eventName].push(eventHandler);
                eventElem.addEventListener(eventName, eventHandler,
                    eventOptions);
            }

            if (vComponent) {
                vComponent.afterInit();
            }
        }
    }
    fireAfterLoad(e);
}

export function removeEvents(elem) {
    console.debug('\tuninitEvents');

    for (const eventElem of getEventElements(elem)) {
        let eventsData = JSON.parse(eventElem.dataset.events);
        for (var j = 0; j < eventsData.length; j++) {
            let eventData = eventsData[j];
            let eventName = eventData[0];
            let eventOptions = eventData[2];
            eventOptions.passive = true;
            for (const handler of eventElem.eventsHandler[eventName]) {
                eventElem.removeEventListener(eventName, handler, eventOptions);
            }
        }
    }
}

function fireAfterLoad(e) {
    for (const eventElem of getEventElements(e)) {
        var eventsData = JSON.parse(eventElem.dataset.events);
        for (var j = 0; j < eventsData.length; j++) {
            var eventData = eventsData[j];
            var eventName = eventData[0];
            if (eventName === 'after_init') {
                var event = new Event('after_init');
                // Dispatch the event.
                eventElem.dispatchEvent(event);
            }
        }
    }
}
