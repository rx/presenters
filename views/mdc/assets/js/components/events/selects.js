export class VSelects {
    constructor(options, params, event) {
        this.target = options.target;
        this.params = params;
        this.event = event;
    }

    call(results) {
        let targetFields =document.querySelectorAll('input[name="'+this.target+'"]');
        let checked = this.event.target.checked;
        new Promise(function (resolve) {
            if (targetFields) {
                if (checked) {
                    for (let i = 0; i < targetFields.length; i++) {
                        console.log(i);
                        targetFields[i].checked = true;
                    }
                } else {
                    for (let i = 0; i < targetFields.length; i++) {
                        targetFields[i].checked = false;
                    }
                }
            }
            results.push({action:'selects', statusCode: 200});
            resolve(results);
        });
    }
}