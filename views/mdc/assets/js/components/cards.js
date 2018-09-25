import {VBaseContainer} from "./base-container";
import {hookupComponents} from "./base-component";

export function initCards() {
    console.log('\tCards');
    hookupComponents('.v-card', VCard, null);
}

export class VCard extends VBaseContainer {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }
}

