export let eventHandlerMixin = Base => class extends Base {
    // idempotent event handling initialization
    initEventListener(eventName, eventHandler, eventOptions) {
        if (typeof this.element.eventsHandler === 'undefined') {
            this.element.eventsHandler = {};
        }
        if (typeof this.element.eventsHandler[eventName] === 'undefined') {
            this.element.eventsHandler[eventName] = [];
        }
        this.element.eventsHandler[eventName].push(eventHandler);
        this.element.addEventListener(eventName, eventHandler, eventOptions);
    }
};
