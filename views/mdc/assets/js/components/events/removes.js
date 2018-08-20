export class VRemoves {
    constructor(options, params, event) {
        this.target = options.target;
        this.ids = params.ids;
        this.event = event;
    }

    call(results) {
        let ids = this.ids;
        var promiseObj = new Promise(function (resolve) {
            console.log("Removing");
            results.push({action: 'removes', statusCode: 200});
            for (const id of ids){
                let elem = document.getElementById(id);
                elem.parentNode.removeChild(elem);
            }
            resolve(results);
        });
        return promiseObj;
    }
}