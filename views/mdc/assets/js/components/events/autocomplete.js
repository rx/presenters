import {VSnackbar} from '../snackbar';
import {VBase} from './base';
import {initialize} from '../initialize';

// Auto complete a datalist
// The elementId is a datalist
// The url is called as a GET expecting json back
export class VAutoComplete extends VBase {
    constructor(options, url, params, event) {
        super(options);
        this.element_id = options.target;
        this.url = url;
        this.params = params;
        this.event = event;
    }

    call(results) {
        // Clear the timeout if it has already been set.
        // This will prevent the previous task from executing
        // if it has been less than <MILLISECONDS>
        var parentElement = this.parentElement();
        var updateElement = this.createUpdateElementHandler(this);
        var promiseObj = new Promise(function (resolve) {
            clearTimeout(parentElement.vTimeout);
            // Make a new timeout
            parentElement.vTimeout = setTimeout(updateElement, 500);
            results.push({action:'autocomplete', statusCode: 200});
            resolve(results);
        });
        return promiseObj;
    }

    // This is used to get a proper binding of the object
    // https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
    createUpdateElementHandler(_this_) {
        return function () {
            _this_.updateElement();
        };
    }

    updateElement() {
        this.clearErrors();
        this.getData(this.populateOptions);
    }

    dataList() {
        return document.getElementById(this.element_id);
    }

    getData(funcProcessData) {
        var comp = this.component();
        if(comp.value().length < 2){
            return;
        }
        var httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            throw new Error('Cannot talk to server! Please upgrade your browser to one that supports XMLHttpRequest.');
            // new VSnackbar('Cannot talk to server! Please upgrade your browser to one that supports XMLHttpRequest.').display();
        }
        var dataList = this.dataList();
        var url = this.buildURL(this.url, this.params, this.inputValues());

        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                console.log(httpRequest.status + ':' + this.getResponseHeader('content-type'));
                if (httpRequest.status === 200) {
                    var response = JSON.parse(httpRequest.responseText);
                    funcProcessData(response, dataList);
                } else {
                    console.error("Unable to autocomplete! ElementId: " + this.element_id);
                }
            }
        };
        console.log('GET:' + url);
        httpRequest.open('GET', url, true);
        httpRequest.send();
    }

    populateOptions(response, dataList) {
        dataList.innerHTML = "";

        response.forEach(function (item) {
            var value = item;
            var key = null;
            if (Array.isArray(item)) {
                value = item[0];
                key = item[1];
            }
            // Create a new <option> element.
            var option = document.createElement('option');
            option.value = value;
            option.dataset.key = key;
            dataList.appendChild(option);
        });
    }
}
