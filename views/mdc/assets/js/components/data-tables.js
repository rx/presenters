
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
    console.log('\tTables');
    let components = e.querySelectorAll('.mdl-data-table');
    if (components) {
        for (let component of components) {
            let selectAllRow = component.querySelector('.v-checkbox--select-control');
            let selectableRows = component.querySelectorAll('.v-table-item--selectable-checkbox');
            if (selectAllRow && selectableRows) {
                selectAllRow.addEventListener('change', createSelectAllHandler(component, selectAllRow, selectableRows));

                for (let element of selectableRows) {
                    element.addEventListener('change', createTableRowSelectHandler(component, selectableRows, selectAllRow));
                }
            }
        }
    }
}
