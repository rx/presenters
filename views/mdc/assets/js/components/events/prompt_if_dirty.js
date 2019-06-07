import {VBase} from './base';
import {VDialog} from './dialog';

const HALT_PATTERNS = [/close/i, /halt/i, /stay/i, /stop/i, /cancel/i];

/**
 * shouldHalt determines whether the specified action should halt execution
 * of further actions.
 * @param {string} action
 * @return {bool}
 */
function shouldHalt(action) {
    for (const pattern of HALT_PATTERNS) {
        if (pattern.test(action)) {
            return true;
        }
    }

    return false;
}

export class VPromptIfDirty extends VBase {
    constructor(options, params, event, root) {
        super(options, root);

        this.targetId = options.target;
        this.params = params;
        this.event = event;
        this.dialog = new VDialog(this.options, this.params, this.event, root);
    }

    call(results) {
        // We're in a dirty state if any dirtyable inputs are dirty:
        const dirty = this.inputComponents()
            .filter((comp) => comp.isDirty)
            .map((comp) => comp.isDirty())
            .some(Boolean);

        results.push({
            action: 'prompt_if_dirty',
            statusCode: 412,
            squelch: true,
            dirty: dirty,
        });

        // If everything's clean, skip the dialog entirely and proceed:
        if (!dirty) {
            return new Promise((resolve, _) => resolve(results));
        }

        // Otherwise, invoke the specified dialog and capture its result:
        return new Promise((resolve, reject) => {
            return this.dialog.call(results).then((results) => {
                const result = results.pop();
                const action = result.dialogAction;

                // If the dialog's result indicates halting, bail out:
                if (shouldHalt(action)) {
                    return reject(results);
                }

                // Otherwise, proceed with the next action:
                return resolve(results);
            });
        });
    }
}
