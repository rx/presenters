import {VBaseComponent} from './base-component';
import {hookupComponents} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';

export function initImages() {
    console.log('\tImages');
    hookupComponents('.v-image', VImage);
}

export class VImage extends eventHandlerMixin(VBaseComponent) {
    constructor(element) {
        super(element);
    }

    preview(result, acceptsMimeTypes, file) {
        this.element.src = result;
    }
}

