import {MDCRipple} from '@material/ripple';
import {VBaseComponent} from './base-component';
import {hookupComponents} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';

export function initButtons(e) {
    console.debug('\tButtons');
    hookupComponents(e, '.v-js-ripple-button', VButton, MDCRipple);
}


export class VButton extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }

    preview(result, acceptsMimeTypes, file) {
        if (this.element.classList.contains('v-button-image')) {
            this.element.style.backgroundImage = `url('${result}')`;
        }
        else {
            console.log(
                `WARNING: Attempted to preview an image on a Button (id: ${this.element.id}) that is NOT an image button.
Make sure you set the type: :image on the button.`);
        }
    }
}

