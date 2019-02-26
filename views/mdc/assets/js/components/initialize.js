import {initButtons} from './button';
import {initDialogs} from './dialogs';
import {initDateTime} from './datetime';
import {initTextFields} from './text-fields';
import {initEvents} from './events';
import {initLists} from './lists';
import {initDrawer} from './drawer';
import {initHeader} from './header';

import {initIconToggles} from './icon-toggles';
import {initMenus} from './menus';
import {initSelects} from './selects';
import {initChips} from './chips';
import {initCards} from './cards';
import {initForms} from './forms';
import {initSnackbar} from './snackbar';
import {initCheckboxes} from './checkboxes';
import {initSwitches} from './switches';
import {initRichTextArea} from './rich-text-area';
import {initSteppers} from './steppers';
import {initRadios} from './radios';
import {initSliders} from './sliders';
import {initHiddenFields} from './hidden-fields';
import {initContent} from './content';
import {initGrid} from './grid';
import {initTabBars} from './tab-bars';
import {initTables} from './data-tables';
import {initFileInputs} from './file-inputs';
import {initFormFields} from './form-fields';
import {initImages} from './images';
import {initTypography} from './typography';
import {initPlugins} from './plugins';

export function initialize() {
    console.log('Initializing');
    initButtons();
    initDialogs();
    initDateTime();// MUST BE BEFORE initTextFields
    initTextFields();
    initLists();
    initDrawer();
    initHeader();
    initIconToggles();
    initMenus();
    initSelects();
    initChips();
    initCards();
    initForms();
    initSnackbar();
    initCheckboxes();
    initSwitches();
    initRichTextArea();
    initSteppers();
    initRadios();
    initSliders();
    initHiddenFields();
    initContent();
    initGrid();
    initTabBars();
    initTables();
    initFileInputs();
    initFormFields();
    initImages();
    initTypography();
    initPlugins();
    // This needs to be last, because it relies on the components installed above.
    initEvents();
}
