import {VBaseComponent} from './base-component';
import {hookupComponents} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';

export function initTypography(e) {
    console.debug('\tTypography');
    hookupComponents(e, '.v-typography', VTypography);
}


export class VTypography extends eventHandlerMixin(VBaseComponent) {
    constructor(element) {
        super(element);
    }

    preview(result, acceptsMimeTypes, file) {
        this.element.innerText = file.name;
    }

    clear() {
        this.element.innerText = '';
    }
}

