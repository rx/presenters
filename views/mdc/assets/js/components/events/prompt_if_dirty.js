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
        const dirty = Array.from(this.inputs())
            .filter((input) => input.vComponent)
            .map((input) => input.vComponent)
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

    /**
     * inputs returns an array of Voom components.
     * If an input_tag has been specified, the array contains input
     * components tagged with the specified input_tag.
     * Otherwise, the array contains the nearest container's input
     * components.
     * @throws Error if No input_tag is specified and a nearest container
     *               cannot be found.
     * @return {array} An array of input components
     */
    inputs() {
        const container = this.closestContainer();
        const inputTag = this.options.input_tag;

        // A specified input_tag has priority over the nearest container:
        if (inputTag) {
            return this.taggedInputs();
        }

        // If no nearest container can be found, bail:
        if (!(container && container.vComponent)) {
            throw new Error(
                'Unable to find a nearest container! Try using an input_tag.'
            );
        }

        // Otherwise, use the nearest container's input elements:
        return container.vComponent.inputs();
    }
}
