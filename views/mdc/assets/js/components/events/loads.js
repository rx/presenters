import {VUrls} from '../../utils/urls';

export class VLoads extends VUrls{
    constructor(options, url, params, event) {
        super();
        this.options = options;
        this.params = params;
        this.url = url;
        this.event = event;
    }

    call(results) {
        var url = this.buildURL(this.url, this.params);
        var promiseObj = new Promise(function (resolve) {
            console.log("Loading page: " + url);
            results.push({action:'loads', statusCode: 200});
            resolve(results);
            window.location = url;
        });
        return promiseObj;
    }
}
