function createDragStartHandler() {
    return function (e) {
        var dragParamData = e.target.dataset.drag_params;
        if(typeof dragParamData !== 'undefined'){
            e.dataTransfer.setData("text/plain", dragParamData);
            let zone = JSON.parse(dragParamData).zone;
            if (zone != null){
                e.dataTransfer.setData(zone, '');
            }
            e.dataTransfer.effectAllowed = 'move';
            e.target.classList.remove('v-dnd-draggable');
            e.target.classList.add('v-dnd-moving');
        }
    }
}

// function createDragHandler() {
//     return function (e) { }
// }

function createDragOverHandler() {
    return function (e) {
        let targetZone = this.dataset.dropzone;
        if(targetZone == null || e.dataTransfer.types.includes(targetZone)){
            // We are allowing a drop if we are here
            // Note that during a dragover event the event/dataTransfer object is in a protected and as a result
            // cannot be read. However, we can interogate the set of types that it contains. My hack/workaround
            // is that during dragStart I add the zone as a type and look for that here
            if (e.preventDefault) {
                e.preventDefault();
            }
            this.classList.add('v-dnd-over');
        }
        else{
            this.classList.remove('v-dnd-over');
        }
    }
}

// function createDragEnterHandler() {
//     return function (e) {}
// }

function createDragLeaveHandler() {
    return function () {
        this.classList.remove('v-dnd-over');
    };
}

function createDropHandler() {
    return function (e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        if (e.preventDefault) {
            e.preventDefault();
        }
        this.classList.remove('v-dnd-over');
        this.classList.remove('v-dnd-moving');
        this.classList.add('v-dnd-draggable');
        return false;
    }
}

function createDragEndHandler() {
    return function (e) {
        this.classList.remove('v-dnd-over');
        this.classList.remove('v-dnd-moving');
        this.classList.add('v-dnd-draggable');
    }
}

export function initDragAndDrop(e) {

    let draggables = document.querySelectorAll('[draggable=true]');
    for (const elem of draggables) {
        elem.addEventListener("dragstart", createDragStartHandler(), false);
        // elem.addEventListener("drag", createDragHandler(), false);
        elem.addEventListener("dragend", createDragEndHandler(), false);
    }

    let dropZones = document.querySelectorAll('[data-dropzone]');
    for (const elem of dropZones) {
        elem.addEventListener("dragover", createDragOverHandler(), false);
        elem.addEventListener("drop", createDropHandler(), false);
        // elem.addEventListener("dragenter", createDragEnterHandler(), false);
        elem.addEventListener("dragleave", createDragLeaveHandler(), false);
    }
}

