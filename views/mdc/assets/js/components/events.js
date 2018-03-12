import {VLoadsPage} from './events/loads';
import {VPost} from './events/post';
import {VReplaceElement} from './events/replace';

export class VEvents {
    //[[type, url, target, params]]
    constructor(actions) {
        this.actions = actions.map((action) => {
            return this.constructor.action_class(action);
    })
        ;
    }

    call() {
        this.actions.forEach((element) => {
            element.call();
    })
        ;
    }

    static action_class(action) {
        var action_type = action[0];
        var url = action[1];
        var target = action[2];
        var params = action[3];

        switch (action_type) {
            case 'loads':
                return new VLoadsPage(url);
            case 'replaces':
                return new VReplaceElement(target, url, params);
            case 'post':
                return new VPost(url, params, 'POST');
            case 'update':
                return new VPost(url, params, 'PUT');
            case 'delete':
                return new VPost(url, params, 'DELETE');
            default:
                throw action_type + ' is not supported.';
        }
    }

}

