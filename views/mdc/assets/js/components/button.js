import {MDCRipple} from '@material/ripple';

export function initButtons(root) {
    console.log('\tButtons');

    var rippleButtons = root.querySelectorAll('.v-js-ripple-button');
    for (var i = 0; i < rippleButtons.length; i++) {
        var button = rippleButtons[i];
        button.mdcComponent = new MDCRipple(button);
    }
}
