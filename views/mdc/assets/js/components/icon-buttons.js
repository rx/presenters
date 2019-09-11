import {hookupComponents} from './base-component';
import {VBaseToggle} from './base-toggle';
import {MDCRipple} from '@material/ripple';

export function initIconButtons(e) {
    console.debug('\tIcon Buttons');
    hookupComponents(e, '.v-icon-button', VIconButton, null);
}

export class VIconButton extends VBaseToggle {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);

        // MDCIconButton does not need JS to work but we hook it up with MDCRipple for ripple effect
        // https://material.io/develop/web/components/buttons/icon-buttons/

        this.iconButtonRipple = new MDCRipple(element);
        this.iconButtonRipple.unbounded = true;
    }
}
