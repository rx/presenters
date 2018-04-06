import {initButtons} from './button';
import {initDialogs} from './dialogs';
import {initTextFields} from './form-fields';
import {initEvents} from './events';
import {initLists} from './lists';
import {initIconToggles} from './icon-toggles';

export function initialize(root){
    console.log('Initializing');
    initButtons(root);
    initEvents(root);
    initDialogs(root);
    initTextFields(root);
    initLists(root);
    initIconToggles(root);
}
