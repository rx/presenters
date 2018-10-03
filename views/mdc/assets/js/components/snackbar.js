import {MDCSnackbar, MDCSnackbarFoundation} from '@material/snackbar';

// This class displays a page level message
export class VSnackbar {
    constructor(element, snackbar) {
        this.element = element;
        this.snackbar = snackbar;
    }

    display(message) {
        const dataObj = {
          message: message,
          // actionText: 'Undo',
          // actionHandler: function () {
          //   console.log('my undo function');
          // }
        };
        this.snackbar.show(dataObj);
    }
}

export function initSnackbar() {
    console.log('\tSnackbar');
    var components = document.querySelectorAll('.mdc-snackbar');
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if (!component.vComponent) {
            component.classList.remove('v-hidden'); // defer causes default snackbar to flash without this
            let vSnackbar= new VSnackbar(component, MDCSnackbar.attachTo(component));
            component.vComponent = vSnackbar;
        }
    }
}
