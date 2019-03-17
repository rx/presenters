import {VBaseContainer} from "./base-container";
import {hookupComponents} from "./base-component";

export function initCards(e) {
    console.log('\tCards');
    hookupComponents(e,'.v-card', VCard, null);
}

export class VCard extends VBaseContainer {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }
}

