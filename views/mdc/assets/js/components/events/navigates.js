export class VNavigates {
    constructor(options, params, event) {
        this.target = options.target;
        this.params = params;
        this.event = event;
    }

    call(results) {
        var promiseObj = new Promise(function (resolve) {
            console.log("Navigating back");
            results.push({action: 'navigates', statusCode: 200});
            history.back();
            resolve(results);
        });
        return promiseObj;
    }
}