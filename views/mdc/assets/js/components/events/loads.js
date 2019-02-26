import {VUrls} from '../../utils/urls';
import {expandParams} from "./action_parameter";

export class VLoads extends VUrls{
    constructor(options, url, params, event) {
        super();
        this.options = options;
        this.params = params;
        this.url = url;
        this.event = event;
    }

    call(results) {
        expandParams(results, this.params);
        var url = this.buildURL(this.url, this.params);
        var newWindow = this.options['target'] === '_blank';
        var promiseObj = new Promise(function (resolve) {
            console.log("Loading page: " + url);
            results.push({action:'loads', statusCode: 200});
            resolve(results);
            newWindow ? window.open(url) : window.location = url;
        });
        return promiseObj;
    }
}
