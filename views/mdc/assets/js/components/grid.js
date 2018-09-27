import {VBaseContainer} from "./base-container";

export function initGrid() {
    console.log('\tGrid');

    var components = document.querySelectorAll('.v-grid');
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if (!component.vComponent) {
            component.vComponent = new VGrid(component);
        }
    }
    var components = document.querySelectorAll('.v-column');
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if (!component.vComponent) {
            component.vComponent = new VColumn(component);
        }
    }
}

export class VGrid extends VBaseContainer {
    constructor(element) {
        super(element);
    }
}

export class VColumn extends VBaseContainer {
    constructor(element) {
        super(element);
    }
}
