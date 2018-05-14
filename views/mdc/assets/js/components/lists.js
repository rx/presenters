

function createSelectAllHandler(target, listElements) {
    return function() {
        if (target.checked) {
            for (let i = 0; i < listElements.length; i++) {
                listElements[i].checked = true;
            }
        }
        else {
            for (let i = 0; i < listElements.length; i++) {
                listElements[i].checked = false;
            }
        }

    }
}

function createListItemSelectHandler(listElements, selectAll) {
    return function() {
        let checked = 0;
        let unchecked = 0;
        for (let i = 0; i < listElements.length; i++) {
            listElements[i].checked ? checked++ : unchecked++;
        }
        if (checked && unchecked) {
            selectAll.indeterminate = true;
        }
        if (checked && !unchecked) {
            selectAll.indeterminate = false;
            selectAll.checked = true;
        }
        if (!checked && unchecked) {
            selectAll.indeterminate = false;
            selectAll.checked = false;
        }
    }
}



export function initLists() {
    console.log('\tLists');
    let components = document.querySelectorAll('.mdc-list');
    if (components) {
        for (let i = 0; i < components.length; i++) {
            let selectAllLineItem = components[i].querySelector('.v-checkbox--select-control');
            let selectableLineItems = components[i].querySelectorAll('.v-list-item--selectable-checkbox');
            if (selectAllLineItem && selectableLineItems) {
                selectAllLineItem.addEventListener('change', createSelectAllHandler(selectAllLineItem, selectableLineItems));
                for (let j = 0; j < selectableLineItems.length; j++) {
                    selectableLineItems[j].addEventListener('change', createListItemSelectHandler(selectableLineItems, selectAllLineItem));
                }
            }
        }
    }
}

