import {initButtons} from './button';
import {initDialogs} from './dialogs';
import {initTextFields} from './form-fields';
import {initEvents} from './events';

export function initialize(root){
    console.log('Initializing');
    initButtons(root);
    initEvents(root);
    initDialogs(root);
    initTextFields(root);
}
