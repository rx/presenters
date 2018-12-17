import {VLoads} from './events/loads';
import {VPosts} from './events/posts';
import {VReplaces} from './events/replaces';
import {VDialog} from './events/dialog';
import {VErrors} from './events/errors';
import {VToggleVisibility} from './events/toggle_visibility';
import {VAutoComplete} from './events/autocomplete';
import {VSnackbarEvent} from './events/snackbar';
import {VNavigates} from './events/navigates';
import {VClears} from './events/clears';
import {VRemoves} from './events/removes';
import {VStepperEvent} from './events/stepper';

export class VEvents {
    //[[type, url, target, params]]
    constructor(actions, event) {
        this.event = event;
        this.actions = actions.map((action) => {
            return this.constructor.action_class(action, event);
        });
    }

    call() {
        // Adapted from http://www.datchley.name/promise-patterns-anti-patterns/#executingpromisesinseries
        var fnlist = this.actions.map((action) => {
            return function(results) {
                return Promise.resolve(action.call(results));
            };
        });

        // Execute a list of Promise return functions in series
        function pseries(list) {
            var p = Promise.resolve([]);
            return list.reduce(function(pacc, fn) {
                return pacc = pacc.then(fn);
            }, p);
        }

        var event = this.event;

        pseries(fnlist).then(function(results) {
            var result = results.pop();
            var contentType = result.contentType;
            var responseURL = result.responseURL;

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

            var result = results.pop();
            new VErrors(event).displayErrors(result);
        });
    }

    static action_class(action, event) {
        var action_type = action[0];
        var url = action[1];
        var options = action[2];
        var params = action[3];

        switch (action_type) {
            case 'loads':
                return new VLoads(options, url, params, event);
            case 'replaces':
                return new VReplaces(options, url, params, event);
            case 'post':
                return new VPosts(options, url, params, 'POST', event);
            case 'update':
                return new VPosts(options, url, params, 'PUT', event);
            case 'delete':
                return new VPosts(options, url, params, 'DELETE', event);
            case 'dialog':
                return new VDialog(options, params, event);
            case 'toggle_visibility':
                return new VToggleVisibility(options, params, event);
            case 'remove':
                return new VRemoves(options, params, event);
            case 'snackbar':
                return new VSnackbarEvent(options, params, event);
            case 'autocomplete':
                return new VAutoComplete(options, url, params, event);
            case 'navigates':
                return new VNavigates(options, params, event);
            case 'clear':
                return new VClears(options, params, event);
            case 'stepper':
                return new VStepperEvent(options, params, event);
            default:
                throw action_type + ' is not supported.';
        }
    }

}

// This is used to get a proper binding of the actionData
// https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
function createEventHandler(actionsData) {
    return function(event) {
        event.stopPropagation();
        new VEvents(actionsData, event).call();
    };
}

export function initEvents() {
    console.log('\tEvents');

    var events = document.querySelectorAll('[data-events]');
    for (var i = 0; i < events.length; i++) {
        var eventElem = events[i];
        var eventsData = JSON.parse(eventElem.dataset.events);
        for (var j = 0; j < eventsData.length; j++) {
            var eventData = eventsData[j];
            var eventName = eventData[0];
            var eventOptions = eventData[2];
            var actionsData = eventData[1];
            var eventHandler = createEventHandler(actionsData);
            // allow overide of event handler by component
            if (eventElem.vComponent &&
                eventElem.vComponent.createEventHandler) {
                eventHandler = eventElem.vComponent.createEventHandler(
                    actionsData);
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
                if (!eventElem.eventsHandler[eventName]) {
                    // Delegate to the component if possible
                    eventElem.eventsHandler[eventName] = eventHandler;
                    eventOptions.passive = true;
                    eventElem.addEventListener(eventName, eventHandler,
                        eventOptions);
                }
            }
        }
    }
    fireAfterLoad();
}

function fireAfterLoad() {
    var events = document.querySelectorAll('[data-events]');
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


