export let eventHandlerMixin = Base => class extends Base {
    // idempotent event handling initialization
    initEventListener(eventName, eventHandler) {
        if (typeof this.eventsHandler === 'undefined') {
            this.eventsHandler = {};
        }
        if (typeof this.eventsHandler[eventName] === 'undefined') {
            this.eventsHandler[eventName] = [];
        }
        this.eventsHandler[eventName].push(eventHandler);
        this.element.addEventListener(eventName, eventHandler);
    }
};
