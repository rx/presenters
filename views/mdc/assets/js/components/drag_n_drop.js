/*
    A drag data store (DragEvent.prototype.dataTransfer.items) can be in one of
    three modes:

    1. read/write, during a `dragstart` event: items can be read and added
    2. read-only, during a `drop` event: items can be read, but not added
    3. protected, during all other types of DragEvent: items cannot be read
       or added.

    (see https://html.spec.whatwg.org/multipage/dnd.html#concept-dnd-rw)

    Thus, attempting to mutate the store during events other than `dragstart`
    fails silently: no error is raised, but items are not added.


    To read items in protected mode, serialize data as a string and store it as
    a key instead of as a value. This makes it accessible via
    `dataTransfer.types`:

    // in a dragstart handler:
    event.dataTransfer.setData(JSON.stringify(foo), '');

    // in a later read-only or protected DragEvent handler:
    const json = event.dataTransfer.types[someIndex];
    const foo = JSON.stringify(json);


    There is no workaround for attempting to mutate a drag data store not in
    read/write mode.
 */

import {getRootNode} from './base-component';

export const EVENT_DROPPED = 'dropped';

const DRAG_DATA_MIME_TYPE = 'application/x.coprl-drag-data+json';
const ELEMENT_ID_MIME_TYPE = 'text/x.coprl-element-id';

function createDragStartHandler(root, element) {
    return function(event) {
        const dragParamData = event.target.dataset.drag_params;

        if (dragParamData) {
            event.dataTransfer.setData(DRAG_DATA_MIME_TYPE, dragParamData);

            const zone = JSON.parse(dragParamData).zone;

            if (zone) {
                event.dataTransfer.setData(zone, '');
            }

            event.dataTransfer.effectAllowed = 'move';
            event.target.classList.remove('v-dnd-draggable');
            event.target.classList.add('v-dnd-moving');

            event.dataTransfer.setData(ELEMENT_ID_MIME_TYPE, element.id);
        }
    };
}

function createDragOverHandler(root, element) {
    return function(event) {
        const dropZone = element.dataset.dropzone;

        if (dropZone == null || event.dataTransfer.types.includes(dropZone)) {
            if (event.preventDefault) {
                event.preventDefault();
            }
            element.classList.add('v-dnd-over');
        }
        else {
            element.classList.remove('v-dnd-over');
        }
    };
}

function createDragLeaveHandler(root, element) {
    return function(event) {
        element.classList.remove('v-dnd-over');
    };
}

function createDropHandler(root, element) {
    // When an element is upgraded to a Voom component after being replaced via
    // `replaces`, root may refer to the replaced element itself instead of the
    // element's root node.
    // Since a valid drop zone may exist anywhere on the page, it is not
    // guaranteed that root contains the element being dragged.
    // getRootNode will fetch `root`'s actual root node (document or shadow
    // DOM root).
    const trueRoot = getRootNode(root);

    return function(event) {
        event.stopPropagation();
        event.preventDefault();

        const id = event.dataTransfer.getData(ELEMENT_ID_MIME_TYPE);
        const draggedElement = id ? trueRoot.querySelector(`#${id}`) : null;
        let dragParams = {};

        if (draggedElement) {
            dragParams = JSON.parse(draggedElement.dataset.drag_params);
        }

        element.classList.remove('v-dnd-over', 'v-dnd-moving');
        element.classList.add('v-dnd-draggable');

        // Emit a "dropped" event for the element being dragged:
        // The drag_params of the dragged element are merged with the
        // drop_params of the drop zone.
        const dropZoneParams = JSON.parse(element.dataset.drop_params);
        const params = Object.assign({}, dragParams, dropZoneParams);
        const droppedEvent = new CustomEvent(EVENT_DROPPED, {detail: params});

        draggedElement.dispatchEvent(droppedEvent);

        return false;
    };
}

function createDragEndHandler(root, element) {
    return function(event) {
        element.classList.remove('v-dnd-over', 'v-dnd-moving');
        element.classList.add('v-dnd-draggable');
    };
}

const DRAGGABLE_SELECTOR = '[draggable=true]';
const DROP_ZONE_SELECTOR = '[data-dropzone]';

export function initDragAndDrop(root) {
    const draggables = Array.from(root.querySelectorAll(DRAGGABLE_SELECTOR));

    if (typeof root.matches === 'function' && root.matches(DRAGGABLE_SELECTOR)) {
        draggables.unshift(root);
    }

    for (const elem of draggables) {
        elem.addEventListener('dragstart', createDragStartHandler(root, elem));
        elem.addEventListener('dragend', createDragEndHandler(root, elem));
    }

    const dropZones = Array.from(root.querySelectorAll(DROP_ZONE_SELECTOR));

    if (typeof root.matches === 'function' && root.matches(DROP_ZONE_SELECTOR)) {
        dropZones.unshift(root);
    }

    for (const elem of dropZones) {
        elem.addEventListener('dragover', createDragOverHandler(root, elem));
        elem.addEventListener('drop', createDropHandler(root, elem));
        elem.addEventListener('dragleave', createDragLeaveHandler(root, elem));
    }
}

/**
 * hasDragDropData determines whether the provided event has previously-set
 * drag-n-drop data available.
 * @param {Event} event
 * @return {Boolean}
 */
export function hasDragDropData(event) {
    return event.type === 'drop' && event.dataTransfer
        || event.type === EVENT_DROPPED && event.detail;
}

/**
 * extractDragDropData attempts to extract a payload of drag-n-drop data from
 * the provided event previously set during  a `dragstart` event.
 * @param {Event} event
 * @return {Object}
 */
export function extractDragDropData(event) {
    if (event.type === 'drop' && event.dataTransfer) {
        return JSON.parse(event.dataTransfer.getData(DRAG_DATA_MIME_TYPE));
    }
    else if (event.type === EVENT_DROPPED) {
        return event.detail;
    }

    return {};
}
