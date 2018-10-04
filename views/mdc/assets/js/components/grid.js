import {VBaseContainer} from "./base-container";
import {hookupComponents} from "./base-component";

export function initGrid() {
    console.log('\tGrid');
    hookupComponents('.v-grid', VGrid, null);
    hookupComponents('.v-column', VColumn, null);
}

export class VGrid extends VBaseContainer {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }
}

export class VColumn extends VBaseContainer {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }
}
