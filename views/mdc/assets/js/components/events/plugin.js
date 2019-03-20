export class VPluginEventAction {
    constructor(actionType, options, params, event, root) {
        this.actionType = actionType;
        this.options = options;
        this.params = params;
        this.event = event;
        this.root = root;
    }

    call(results) {
        const actionType = this.actionType;
        const options = this.options;
        const params = this.params;
        const event = this.event;
        return this.root.defaultView[actionType](options, params, event,
            results);
    }
}
