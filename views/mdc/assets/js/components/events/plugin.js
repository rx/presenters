export class VPluginEventAction {
    constructor(actionType, options, params, event) {
        this.actionType = actionType;
        this.options = options;
        this.params = params;
        this.event = event;
    }

    call(results) {
        const actionType = this.actionType;
        const options = this.options;
        const params = this.params;
        const event = this.event;
        console.log('Calling plugin');
        return window[actionType](options, params, event, results);
    }
}
