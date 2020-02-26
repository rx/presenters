import {VBase} from './base';


export class VCloseDialog extends VBase {
    constructor(options, params, event, root) {
        super(options, root);
        this.elementId = options.target;
    }

    call(results) {
        return new Promise((resolve) => {
            const elem = this.root.getElementById(this.elementId);
            if (!elem) {
                const err = new Error(
                    `Unable to locate node ${this.elementId}!`
                    + ' Did you forget to attach it?');

                results.push({
                    action: 'close',
                    contentType: 'v/errors',
                    content: {exception: err.message},
                });

                return new Promise((_, reject) => reject(results));
            }
            if (!elem.vComponent || !elem.vComponent.respondTo('closeDialog')) {
                const err = new Error(
                    `Element at node ${this.elementId} does not contain a component that reponds to `
                    + 'the closeDialog() method. Are you targeting the correct element.');

                results.push({
                    action: 'close_dialog',
                    contentType: 'v/errors',
                    content: {exception: err.message},
                });

                return new Promise((_, reject) => reject(results));
            }
            elem.vComponent.closeDialog();

            results.push({
                action: 'close_dialog',
                statusCode: 200,
            });

            // Otherwise, proceed with the next action:
            return resolve(results);
        });
    }
}