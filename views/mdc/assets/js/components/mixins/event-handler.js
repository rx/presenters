export let eventHandlerMixin = Base => class extends Base {
    // idempotent event handling initialization
    initEventListener(eventName, eventHandler) {
        if (typeof this.eventsHandler === 'undefined') {
            this.eventsHandler = {};
        }
        if (!this.eventsHandler[eventName]) {
            // Delegate to the component if possible
            this.eventsHandler[eventName] = eventHandler;
            this.element.addEventListener(eventName, eventHandler);
        }
    }
};
