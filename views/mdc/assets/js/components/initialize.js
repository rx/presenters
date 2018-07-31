import {initButtons} from './button';
import {initDialogs} from './dialogs';
import {initDateTime} from './datetime';
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
import {initSwitches} from './switches';
import {initSteppers} from './steppers';
import {initRadios} from './radios';
import {initSliders} from './sliders';
import {initHiddenFields} from './hidden-fields';

export function initialize(){
    console.log('Initializing');
    initButtons();
    initDialogs();
    initDateTime();// MUST BE BEFORE initTextFields
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
    initSwitches();
    initSteppers();
    initRadios();
    initSliders();
    initHiddenFields();
    // This needs to be last, because it relies on the components installed above.
    initEvents();
}
