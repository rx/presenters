import {VBase} from './base';
import {VDialog} from './dialog';

const HALT_ACTIONS = ['close', 'halt', 'stay', 'stop'];

export class VPromptIfDirty extends VBase {
    constructor(options, params, event) {
        super(options);

        this.targetId = options.target;
        this.params = params;
        this.event = event;
        this.dialog = new VDialog(this.options, this.params, this.event);

        // TODO: handle incoming input_tag
    }

    call(results) {
        const parent = this.parentElement().vComponent;

        if (!parent) {
            const error = new Error(
                'Unable to find a parent container! '
                + 'Try using input_tag instead.'
            );

            results.push({
                action: 'prompt_if_dirty',
                contentType: 'v/errors',
                content: {exception: error.message},
            });

            return new Promise((_, reject) => reject(results));
        }

        // A container is dirty if any of its dirtyable components are dirty:
        const isDirty = Array.from(parent.inputs())
            .filter((element) => element.vComponent)
            .map((element) => element.vComponent)
            .filter((comp) => comp.isDirty)
            .map((comp) => comp.isDirty())
            .some(Boolean);

        results.push({
            action: 'prompt_if_dirty',
            squelch: true,
            dirty: isDirty,
        });

        if (!isDirty) {
            return new Promise((resolve, _) => resolve(results));
        }

        // If the container is dirty, invoke the specified dialog and capture
        // the result:
        return new Promise((resolve, reject) => {
            return this.dialog.call(results).then((results) => {
                const result = results.pop();
                const action = result.dialogAction;

                // If the dialog's result indicates halting, bail out:
                if (HALT_ACTIONS.includes(action)) {
                    return reject(results);
                }

                // Otherwise, proceed with the next action:
                return resolve(results);
            });
        });
    }
}
