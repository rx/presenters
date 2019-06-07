export class VRemoves {
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
            results.push({action: 'removes', statusCode: 200});
            for (const id of ids) {
                const elem = root.getElementById(id);
                elem.parentNode.removeChild(elem);
            }
            resolve(results);
        });
    }
}
