export class VToggleVisiblity {
    constructor(targetId, params, event) {
            this.targetId = targetId;
            this.params = params;
            this.event = event;
        }

    call() {
        var targetId = this.targetId;
        var promiseObj = new Promise(function (resolve) {
            console.log("Toggling visiblity on: " + targetId);
            var elem = document.getElementById(targetId);
            elem.classList.toggle("v-hidden");
      
            resolve([200, null, null]);
        });
        return promiseObj;
    }
}
