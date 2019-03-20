import {VUrls} from '../../utils/urls';
import {expandParams} from './action_parameter';

export class VLoads extends VUrls {
    constructor(options, url, params, event, root) {
        super();
        this.root = root;
        this.options = options;
        this.params = params;
        this.url = url;
        this.event = event;
    }

    call(results) {
        expandParams(results, this.params);
        const root = this.root;
        const url = this.buildURL(this.url, this.params);
        const newWindow = this.options['target'] === '_blank';
        return new Promise(function(resolve) {
            results.push({action: 'loads', statusCode: 200});
            resolve(results);
            newWindow ?
                root.defaultView.open(url) :
                root.defaultView.location = url;
        });
    }
}
