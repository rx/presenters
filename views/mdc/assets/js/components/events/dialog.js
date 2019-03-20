export class VDialog {
    constructor(options, params, event, root) {
        this.dialogId = options.target;
        this.params = params;
        this.event = event;
        this.root = root;
    }

    call(results) {
        const dialog = this.root.querySelector('#' + this.dialogId);

        if (!(dialog && dialog.vComponent)) {
            const err = new Error(
                `Unable to find dialog ${this.dialogId}. `
                + 'Did you forget to attach it?'
            );

            results.push({
                action: 'dialog',
                contentType: 'v/errors',
                content: {exception: err.message},
            });

            return new Promise((_, reject) => reject(results));
        }

        return new Promise(function(resolve, reject) {
            const comp = dialog.vComponent.mdcComponent;

            comp.listen('MDCDialog:closed', (event) => {
                results.push({
                    action: 'dialog',
                    statusCode: 200,
                    dialogAction: event.detail.action,
                });

                resolve(results);
            });

            dialog.vComponent.open();
        });
    }
}
