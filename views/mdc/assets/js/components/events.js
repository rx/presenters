import {VLoadsPage} from './events/loads';
import {VPost} from './events/post';
import {VReplaceElement} from './events/replace';
import {VErrors} from './events/errors';

export class VEvents {
    //[[type, url, target, params]]
    constructor(actions) {
        this.actions = actions.map((action) => {
            return this.constructor.action_class(action);
        });
    }

    call() {
        // Adapted from http://www.datchley.name/promise-patterns-anti-patterns/#executingpromisesinseries
        var fnlist = this.actions.map((action) => {
            return function(){ return Promise.resolve(action.call());};
        });
        // Execute a list of Promise return functions in series
        function pseries(list) {
          var p = Promise.resolve();
          return list.reduce(function(pacc, fn) {
            return pacc = pacc.then(fn);
          }, p);
        }

        pseries(fnlist)
          .then(function(results){ console.log('success!' + results);})
          .catch(function(results){
              console.log('failure!' + results);
              new VErrors().displayErrors(results);
          });
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

