export class VClears {
    constructor(options, params, event) {
        this.target = options.target;
        this.ids = params.ids;
        this.event = event;
    }

    call(results) {
        let ids = this.ids;
        var promiseObj = new Promise(function (resolve) {
            console.log("Clearing");
            results.push({action: 'clears', statusCode: 200});
            for (const id of ids){
                let elem = document.getElementById(id);
                if(elem && elem.vComponent && elem.vComponent.clear){
                    elem.vComponent.clear();
                }else {
                    console.log("Unable to clear element with id: "+id+
                        "! Check to make sure you passed the correct id, and that the control/input can be cleared.");
                }
            }
            resolve(results);
        });
        return promiseObj;
    }
}