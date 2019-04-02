export class VToggleVisibility {
    constructor(options, params, event, root) {
        this.targetId = options.target;
        this.params = params;
        this.event = event;
        this.root = root;
    }

    call(results) {
        const targetId = this.targetId;
        const action = this.params.action;
        const delayAmt = this.event instanceof FocusEvent ? 500 : 0;
        const elem = this.root.getElementById(targetId);

        if (!elem) {
            const err = new Error(
                `Unable to locate node ${targetId}!`
                + ' Did you forget to attach it?',
            );

            results.push({
                action: 'toggle_visibility',
                contentType: 'v/errors',
                content: {exception: err.message},
            });

            return new Promise((_, reject) => reject(results));
        }

        const promiseObj = new Promise(function(resolve) {
            clearTimeout(elem.vTimeout);
            elem.vTimeout = setTimeout(function() {
                console.log('Toggling visibility on: ' + targetId);

                if (action === 'show') {
                    if (elem.vComponent && elem.vComponent.show) {
                        elem.vComponent.show();
                    }
                    else {
                        elem.classList.remove('v-hidden');
                    }
                }
                else if (action === 'hide') {
                    if (elem.vComponent && elem.vComponent.hide) {
                        elem.vComponent.hide();
                    }
                    else {
                        elem.classList.add('v-hidden');
                    }
                }
                else {
                    if (elem.vComponent && elem.vComponent.toggleVisibility) {
                        elem.vComponent.toggleVisibility();
                    }
                    else {
                        elem.classList.toggle('v-hidden');
                    }
                }
                if (elem.classList.contains('v-hidden') && elem.vComponent &&
                    elem.vComponent.onHide) {
                    elem.vComponent.onHide();
                }
                else if (elem.vComponent && elem.vComponent.onShow) {
                    elem.vComponent.onShow();
                }
                results.push({action: 'toggle_visibility', statusCode: 200});
                resolve(results);
            }, delayAmt);
        });
        return promiseObj;
    }
}
