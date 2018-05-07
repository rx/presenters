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
import {initForms} from './forms';
import {initSnackbar} from './snackbar';
import {initCheckboxes} from './checkboxes';
import {initDateTime} from './date-time';
import {initSwitches} from './switches';

export function initialize(){
    console.log('Initializing');
    initButtons();
    initDialogs();
    initTextFields();
    initLists();
    initIconToggles();
    initMenus();
    initSelects();
    initChips();
    initCards();
    initForms();
    initSnackbar();
    initCheckboxes();
    initDateTime();
    initSwitches();
    // This needs to be last, because it relies on the components installed above.
    initEvents();
    // componentHandler.upgradeAllRegistered();
}
