import {VBaseComponent} from './base-component';
import {hookupComponents} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';

export function initTypogrophy() {
    console.log('\tTypogrophy');
    hookupComponents('.v-typography', VTypogrophy);
}


export class VTypogrophy extends eventHandlerMixin(VBaseComponent) {
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

