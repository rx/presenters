import {MDCDataTable} from '@material/data-table';
import {hookupComponents} from "./base-component";
import {eventHandlerMixin} from "./mixins/event-handler";
import {VBaseContainer} from "./base-container";

export function initTables(e) {
    console.debug('\tTables');
    hookupComponents(e, '.v-data-table', VDataTable, MDCDataTable);
}

export class VDataTable extends eventHandlerMixin(VBaseContainer) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }
}
