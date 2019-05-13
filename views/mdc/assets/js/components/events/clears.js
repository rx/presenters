export class VClears {
    constructor(options, params, event, root) {
        this.target = options.target;
        this.ids = params.ids;
        this.event = event;
        this.root = root;
    }

    call(results) {
        const ids = this.ids;
        const root = this.root;
        return new Promise(function(resolve) {
            console.debug('Clearing');
            results.push({action: 'clears', statusCode: 200});
            for (const id of ids) {
                const elem = root.getElementById(id);
                if (elem && elem.vComponent && elem.vComponent.clear) {
                    elem.vComponent.clear();
                }
                else {
                    console.warn('Unable to clear element with id: ' + id +
                        '! Check to make sure you passed the correct id, and ' +
                        'that the control/input can be cleared.');
                }
            }
            resolve(results);
        });
    }
}
