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
        return new Promise(function(resolve) {
            console.log('Calling plugin');
            const result = window[actionType](options, params, event);
            result.content = JSON.stringify(result.content);
            results.push(result);
            resolve(results);
        });
    }
}
