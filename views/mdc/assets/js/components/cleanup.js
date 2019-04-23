import {removeEvents} from './events';
import {unhookComponents} from './base-component';

export function cleanup(root) {
    console.log('Cleaning up');
    // Order matters here
    removeEvents(root);
    unhookComponents(root);
}
