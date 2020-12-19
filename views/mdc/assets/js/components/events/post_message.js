export class VPostMessage {
    constructor(options, params, event, root) {
        this.params = params;
        this.event = event;
        this.root = root;
    }

    call(results) {
        return new Promise((resolve) => {
            console.log('Post Message: ' + this.params.message);
            window.parent.postMessage(this.params.message, '*');
            results.push({
                action: 'close_frame',
                statusCode: 200,
            });

            // Otherwise, proceed with the next action:
            return resolve(results);
        });
    }
}
