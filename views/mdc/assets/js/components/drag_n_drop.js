import {DnD} from '../utils/drag_n_drop';

export function initDragAndDrop(e) {
    DnD.initDraggables('[draggable=true]');
    DnD.initDropZones('[data-dropzone]');
}