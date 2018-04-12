import {initButtons} from './button';
import {initDialogs} from './dialogs';
import {initTextFields} from './text-fields';
import {initEvents} from './events';
import {initLists} from './lists';
import {initIconToggles} from './icon-toggles';
import {initMenus} from './menus';

export function initialize(){
    console.log('Initializing');
    initButtons();
    initEvents();
    initDialogs();
    initTextFields();
    initLists();
    initIconToggles();
    initMenus();
    // componentHandler.upgradeAllRegistered();
}
