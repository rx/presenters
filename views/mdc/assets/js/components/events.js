import {VLoads} from './events/loads';
import {VPosts} from './events/posts';
import {VReplaces} from './events/replaces';
import {VDialog} from './events/dialog';
import {VErrors} from './events/errors';
import {VToggleVisibility} from './events/toggle_visibility';
import {VPromptIfDirty} from './events/prompt_if_dirty';
import {VSnackbarEvent} from './events/snackbar';
import {VClears} from './events/clears';
import {VRemoves} from './events/removes';
import {VStepperEvent} from './events/stepper';
import {VNavigates} from './events/navigates';
import {VPluginEventAction} from './events/plugin';
import getRoot from './root_document';

export class VEvents {
    // [[type, url, target, params]]
    constructor(actions, event, root) {
        this.event = event;
        this.root = root;
        this.actions = actions.map((action) => {
            return this.constructor.action_class(action, event, root);
        });
    }

    call() {
        // Adapted from http://www.datchley.name/promise-patterns-anti-patterns/#executingpromisesinseries
        const fnlist = this.actions.map((action) => {
            return function(results) {
                return Promise.resolve(action.call(results));
            };
        });

        // Execute a list of Promise return functions in series
        function pseries(list) {
            const p = Promise.resolve([]);
            return list.reduce(function(pacc, fn) {
                return pacc = pacc.then(fn);
            }, p);
        }

        const event = this.event;
        const root = this.root;

        pseries(fnlist).then(function(results) {
            const result = results.pop();
            const contentType = result.contentType;
            const responseURL = result.responseURL;

            if (event.target.dialog) {
                event.target.dialog.close();
            }
            if (contentType && contentType.indexOf('text/html') !== -1 &&
                typeof responseURL !== 'undefined') {
                window.location = responseURL;
            }
        }).catch(function(results) {
            console.log('If you got here it may not be what you think:',
                results);

            let result = results;

            if (typeof results.pop === 'function') {
                result = results.pop();
            }

            if (!result.squelch) {
                new VErrors(root, event).displayErrors(result);
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
function createEventHandler(actionsData, root) {
    return function(event) {
        event.stopPropagation();
        new VEvents(actionsData, event, root).call();
    };
}

export function initEvents(e) {
    console.log('\tEvents');

    var events = e.querySelectorAll('[data-events]');
    for (var i = 0; i < events.length; i++) {
        var eventElem = events[i];
        var eventsData = JSON.parse(eventElem.dataset.events);
        for (var j = 0; j < eventsData.length; j++) {
            var eventData = eventsData[j];
            var eventName = eventData[0];
            var eventOptions = eventData[2];
            var actionsData = eventData[1];
            var eventHandler = createEventHandler(actionsData, getRoot(e));
            // allow overide of event handler by component
            if (eventElem.vComponent &&
                eventElem.vComponent.createEventHandler) {
                eventHandler = eventElem.vComponent.createEventHandler(
                    actionsData, getRoot(e));
            }
            // Delegate to the component if possible
            if (eventElem.vComponent &&
                eventElem.vComponent.initEventListener) {
                eventElem.vComponent.initEventListener(eventName, eventHandler);
            }
            else {
                if (typeof eventElem.eventsHandler === 'undefined') {
                    eventElem.eventsHandler = {};
                }
                if (typeof eventElem.eventsHandler[eventName] === 'undefined') {
                    eventElem.eventsHandler[eventName] = [];
                }
                eventElem.eventsHandler[eventName].push(eventHandler);
                eventOptions.passive = true;
                eventElem.addEventListener(eventName, eventHandler,
                    eventOptions);
            }
        }
    }
    fireAfterLoad(e);
}

function fireAfterLoad(e) {
    var events = e.querySelectorAll('[data-events]');
    for (var i = 0; i < events.length; i++) {
        var eventElem = events[i];
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


