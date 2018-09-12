export class VToggleVisibility  {
    constructor(options, params, event) {
        this.targetId = options.target;
        this.params = params;
        this.event = event;
    }

    call(results) {
        let targetId = this.targetId;
        let action = this.params.action;
        let delayAmt = this.event instanceof FocusEvent ? 500 : 0;
        let elem = document.getElementById(targetId);
        let promiseObj = new Promise(function (resolve) {
            clearTimeout(elem.vTimeout);
            elem.vTimeout = setTimeout(function(){
                console.log("Toggling visibility on: " + targetId);
                if (action === 'show') {
                    elem.classList.remove("v-hidden");
                } else if (action === 'hide') {
                    elem.classList.add("v-hidden");
                } else {
                    elem.classList.toggle("v-hidden");
                }
                results.push({action:'toggle_visibility', statusCode: 200});
                resolve(results);
            }, delayAmt);
        });
        return promiseObj;
    }
}
