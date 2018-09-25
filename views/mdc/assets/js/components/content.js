import {VBaseContainer} from "./base-container";
import {hookupComponents} from "./base-component";

export function initContent() {
    console.log('\tContent');
    hookupComponents('.v-content', VContent, null);
}

export class VContent extends VBaseContainer {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }
}
