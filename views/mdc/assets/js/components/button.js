import {MDCRipple} from '@material/ripple';

export function initButtons() {
    console.log('\tButtons');

    var rippleButtons = document.querySelectorAll('.v-js-ripple-button');
    if(rippleButtons) {
        for (var i = 0; i < rippleButtons.length; i++) {
            var button = rippleButtons[i];
            if(!button.mdcComponent) {
                button.mdcComponent = new MDCRipple(button);
            }
        }
    }
}
