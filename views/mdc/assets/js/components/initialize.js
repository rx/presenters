import {initButtons} from './button';
import {initDialogs} from './dialogs';
import {initTextFields} from './text-fields';
import {initEvents} from './events';
import {initLists} from './lists';
import {initIconToggles} from './icon-toggles';
import {initMenus} from './menus';
import {initSelects} from './selects';
import {initChips} from './chips';
import {initCards} from './cards';

export function initialize(){
    console.log('Initializing');
    initButtons();
    initEvents();
    initDialogs();
    initTextFields();
    initLists();
    initIconToggles();
    initMenus();
    initSelects();
    initChips();
    initCards();
    // componentHandler.upgradeAllRegistered();
}
