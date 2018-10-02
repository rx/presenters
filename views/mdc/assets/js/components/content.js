import {VBaseContainer} from "./base-container";

export function initContent() {
    console.log('\tContent');

    var components = document.querySelectorAll('.v-content');
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if (!component.vComponent) {
            component.vComponent = new VContent(component);
        }
    }
}

export class VContent extends VBaseContainer {
    constructor(element) {
        super(element);
    }
}
