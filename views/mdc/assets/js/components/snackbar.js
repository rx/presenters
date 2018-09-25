import {MDCSnackbar, MDCSnackbarFoundation} from '@material/snackbar';
import {VBaseComponent, hookupComponents} from './base-component';


export function initSnackbar() {
    console.log('\tSnackbar');
    hookupComponents('.v-snackbar', VSnackbar, MDCSnackbar);
}

// This class displays a page level message
export class VSnackbar extends VBaseComponent {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        element.classList.remove('v-hidden'); // defer causes default snackbar to flash without this
    }

    display(message) {
        const dataObj = {
            message: message,
        };
        this.mdcComponent.show(dataObj);
    }
}