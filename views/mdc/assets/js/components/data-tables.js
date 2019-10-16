import {MDCDataTable} from '@material/data-table';
import {hookupComponents} from "./base-component";
import {eventHandlerMixin} from "./mixins/event-handler";
import {VBaseContainer} from "./base-container";

function createSelectAllHandler(component, target, listElements) {
    return function() {
        for (let element of listElements) {
            element.checked = target.checked;
        }
    }
}

function createTableRowSelectHandler(component, listElements, selectAll) {
    return function() {
        let checked = 0;
        let unchecked = 0;
        for (let element of listElements) {
            element.checked ? checked++ : unchecked++;
        }
        selectAll.indeterminate = (checked && unchecked);
        selectAll.checked = (checked && !unchecked);
    }
}

export function initTables(e) {
    console.debug('\tTables');
    hookupComponents(e, '.v-data-table', VDataTable, MDCDataTable);
}

export class VDataTable extends eventHandlerMixin(VBaseContainer) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);

        // let selectAllRow = element.querySelector('.v-checkbox--select-control');
        // let selectableRows = element.querySelectorAll('.v-table-item--selectable-checkbox');
        // if (selectAllRow && selectableRows) {
        //     selectAllRow.addEventListener('change', createSelectAllHandler(element, selectAllRow, selectableRows));
        //
        //     for (let element of selectableRows) {
        //         element.addEventListener('change', createTableRowSelectHandler(element, selectableRows, selectAllRow));
        //     }
        // }
    }
}
