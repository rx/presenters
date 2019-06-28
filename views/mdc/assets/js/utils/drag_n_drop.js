export const DnD = function () {
    var initDraggables = function (selector) {
            let draggables = document.querySelectorAll(selector);
            [].forEach.call(draggables, function (elem) {
                elem.addEventListener("dragstart", dragStart, false);
                elem.addEventListener("drag", drag, false);
                elem.addEventListener("dragend", dragEnd, false);
            });

        },
        initDropZones = function (selector) {
            let dropZones = document.querySelectorAll(selector);
            [].forEach.call(dropZones, function (elem) {
                elem.addEventListener("dragover", dragOver, false);
                elem.addEventListener("drop", drop, false);
                elem.addEventListener("dragenter", dragEnter, false);
                elem.addEventListener("dragleave", dragLeave, false);
            });
        },
        dragStart = function (e) {
            var dragParamData = e.target.dataset.drag_params;
            if(typeof dragParamData !== 'undefined'){
                e.dataTransfer.setData("text/plain", dragParamData);
                let zone = JSON.parse(dragParamData).zone;
                if (zone != null){
                    e.dataTransfer.setData(zone, '');
                }
                e.dataTransfer.effectAllowed = 'move';
                e.target.classList.add('v-dnd-moving');
            }
        },
        drag = function (e) {
        },
        dragOver = function (e) {
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

        },
        dragEnter = function (e) {
        },
        dragLeave = function () {
            this.classList.remove('v-dnd-over');
        },

        drop = function (e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            this.classList.remove('v-dnd-over');
            this.classList.remove('v-dnd-moving');
            return false;
        },
        dragEnd = function (e) {
            this.classList.remove('v-dnd-over');
            this.classList.remove('v-dnd-moving');
        };

    return {
        initDraggables: initDraggables,
        initDropZones: initDropZones
    }
}();
