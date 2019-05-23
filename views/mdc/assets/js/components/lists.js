
function createSelectAllHandler(component, target, listElements) {
    return function() {
        for (let element of listElements) {
            element.checked = target.checked;
        }
        if (component.dataset.totalLines > listElements.length) {
            toggleSelectTotalHeader(component, listElements.length, target.checked);
        }
    }
}

function createSelectTotalSetHandler(component) {
    return function(event) {
        event.preventDefault();
        if (component.dataset.totalLines > 0) {
            toggleSelectTotalInput(component, !component.querySelector('#select-total').checked);
        }
    }
}

function createListItemSelectHandler(component, listElements, selectAll) {
    return function() {
        let checked = 0;
        let unchecked = 0;
        toggleSelectTotalInput(component, false); // Clear select total results whenever a list item selection is modified
        for (let element of listElements) {
            element.checked ? checked++ : unchecked++;
        }
        selectAll.indeterminate = (checked && unchecked);
        selectAll.checked = (checked && !unchecked);
        toggleSelectTotalHeader(component, listElements.length, (Boolean(checked) && !Boolean(unchecked)));
    }
}

function toggleSelectTotalHeader(component, count, show = false) {
    if (component.dataset.totalLines > 0) {
        updateSelectionCount(component, count);
        if (show === false) {
            component.querySelector('#list-item-select-all-header').classList.add('hidden');
        } else {
            component.querySelector('#list-item-select-all-header').classList.remove('hidden');
        }
    }
}

function toggleSelectTotalInput(component, selectTotal = false) {
    if (component.dataset.totalLines > 0) {
        component.querySelector('#select-total').checked = selectTotal;
        component.querySelector('#list-item-select-all-toggle-on').classList.add('hidden');
        component.querySelector('#list-item-select-all-toggle-off').classList.add('hidden');
        component.querySelector('#list-item-select-all-toggle-' + (selectTotal ? 'on' : 'off')).classList.remove('hidden');
    }
}

function updateSelectionCount(component, count) {
    if (component.dataset.totalLines > 0) {
        component.querySelector('#page-selection-count').innerHTML = count;
    }
}

export function initLists(e) {
    console.debug('\tLists');
    let components = e.querySelectorAll('.mdc-list');
    if (components.length === 0 && e.offsetParent.vComponent !== undefined) {
        components = document.querySelectorAll('.mdc-list');
    }
    if (components) {
        for (let component of components) {
            let selectAllLineItem = component.querySelector('.v-checkbox--select-control');
            let selectableLineItems = component.querySelectorAll('.v-list-item--selectable-checkbox');
            if (selectAllLineItem && selectableLineItems) {
                for (let element of component.querySelectorAll('.toggle-total-set')) {
                    // Clone and replace element to prevent duplicate event handlers when additional records are loaded/paged
                    let new_element = element.cloneNode(true);
                    element.parentNode.replaceChild(new_element, element);
                    new_element.addEventListener('click', createSelectTotalSetHandler(component));
                }

                selectAllLineItem.addEventListener('change', createSelectAllHandler(component, selectAllLineItem, selectableLineItems));

                for (let element of selectableLineItems) {
                    element.addEventListener('change', createListItemSelectHandler(component, selectableLineItems, selectAllLineItem));
                }
                updateSelectionCount(component, selectableLineItems.length);
                toggleSelectTotalInput(component);
            }
        }
    }
}
