import {VBaseContainer} from './base-container';
import {hookupComponents} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';

export function initContent() {
    console.log('\tContent');
    hookupComponents('.v-content', VContent, null);
}

export class VContent extends eventHandlerMixin(VBaseContainer) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        if (element.dataset.float === 'true') {
            VContent.hideOnClickOutside(element);
            VContent.hideOnEscape(element);
        }
    }

    static hideOnClickOutside(element) {
        const outsideClickListener = (event) => {
            // or use: event.target.closest(selector) === null
            if (!element.contains(event.target) &&
                VContent.isVisible(element)) {
                element.classList.add('v-hidden');
            }
        };

        document.addEventListener('click', outsideClickListener);
    }

    static hideOnEscape(element) {
        const escapeKeyListener = (event) => {
            // or use: event.target.closest(selector) === null
            if (event.which === 27) {
                element.classList.add('v-hidden');
            }
        };

        document.addEventListener('keydown', escapeKeyListener);
    }

    static isVisible(elem) {
        // source (2018-03-11): https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js
        return !!elem && !!(elem.offsetWidth || elem.offsetHeight ||
            elem.getClientRects().length);
    }
}
