import {VBase} from './base';


export class VResets extends VBase {
    constructor(options, params, event, root) {
        super(options, root);
        this.elementId = options.target;
    }

    call(results) {
        // Otherwise, invoke the specified dialog and capture its result:
        return new Promise((resolve) => {
            const elem = this.root.getElementById(this.elementId);
            if (!elem) {
                const err = new Error(
                    `Unable to locate node ${this.elementId}!`
                    + ' Did you forget to attach it?');

                results.push({
                    action: 'reset',
                    contentType: 'v/errors',
                    content: {exception: err.message},
                });

                return new Promise((_, reject) => reject(results));
            }
            elem.vComponent.reset();

            results.push({
                action: 'reset',
                statusCode: 200,
            });

            // Otherwise, proceed with the next action:
            return resolve(results);
        });
    }
}
