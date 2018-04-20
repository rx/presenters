export class VLoadsPage {
    constructor(options, url) {
        this.options = options;
        this.url = url;
    }

    call() {
        var url = this.url;
        var promiseObj = new Promise(function (resolve) {
            console.log("Loading page: " + url);
            window.location = url;
            resolve([200, null, null]);
        });
        return promiseObj;
    }
}
