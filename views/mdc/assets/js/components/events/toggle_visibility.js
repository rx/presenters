export class VToggleVisibility  {
    constructor(options, params, event) {
        this.targetId = options.target;
        this.params = params;
        this.event = event;
    }

    call(results) {
        let targetId = this.targetId;
        let action = this.params.action;
        let promiseObj = new Promise(function (resolve) {
            console.log("Toggling visibility on: " + targetId);
            let elem = document.getElementById(targetId);
            if (action === 'show') {
                elem.classList.remove("v-hidden");
            } else if (action === 'hide') {
                elem.classList.add("v-hidden");
            } else {
                elem.classList.toggle("v-hidden");
            }
            results.push({action:'toggle_visibility', statusCode: 200});
            resolve(results);
        });
        return promiseObj;
    }
}
