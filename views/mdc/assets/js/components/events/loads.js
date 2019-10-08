import {expandParams} from './action_parameter';
import {expandParam} from './action_parameter';
import {VBase} from './base';

export class VLoads extends VBase {
    constructor(options, url, params, event, root) {
        super();
        this.root = root;
        this.options = options;
        this.params = params;
        this.url = url;
        this.event = event;
    }


    waitForDownload(downloadID, f) {
        // Now, we need to start watching the local Cookies to
        // see when the download ID has been updated by the
        // response headers.
        const cookieTimer = setInterval(() => {
            // The local cookie cache is defined in the browser
            // as one large string; we need to search for the
            // name-value pattern with the above ID.
            const cookiePattern = new RegExp(('downloadID=' + downloadID), 'i');

            if (!downloadID) {
                clearInterval(cookieTimer);
                return f();
            }
            // I check the local cookies for an update.
            // If the local cookies have been updated, clear
            // the timer and call the promise!
            else if (document.cookie.search(cookiePattern) >= 0) {
                clearInterval(cookieTimer);
                return f();
            }
            console.debug(
                'File still downloading (Make sure you set the downloadID in your cookie?)...',
                new Date().getTime());
        }, downloadID ? 500 : 0);
    }


    call(results) {
        const rootURL = expandParam(results, this.url);
        const expandedParams = expandParams(results, this.params);
        return new Promise((resolve) => {
            let downloadID = null;
            if (this.options['wait_for_download']) {
                downloadID = (new Date()).getTime();
            }
            const url = this.buildURL(rootURL, expandedParams,
                this.inputValues(),
                downloadID ? {download_id: downloadID} : null);
            this.waitForDownload(downloadID, () => {
                results.push({action: 'loads', statusCode: 200});
                resolve(results);
            });
            this.options['target'] === '_blank' ?
                this.root.defaultView.open(url) :
                this.root.defaultView.location = url;
        });
    }
}
