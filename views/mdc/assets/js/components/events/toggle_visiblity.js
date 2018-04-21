export class VToggleVisiblity  {
    constructor(options, params, event) {
        this.targetId = options.target;
        this.params = params;
        this.event = event;
    }

    call(results) {
        var targetId = this.targetId;
        var promiseObj = new Promise(function (resolve) {
            console.log("Toggling visiblity on: " + targetId);
            var elem = document.getElementById(targetId);
            elem.classList.toggle("v-hidden");
            results.push({action:'toggle_visiblity', statusCode: 200});
            resolve(results);
        });
        return promiseObj;
    }
}
