import {VBaseContainer} from "./base-container";

export function initCards() {
    console.log('\tCards');

    var components = document.querySelectorAll('.v-card');
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if (!component.vComponent) {
            component.vComponent = new VCard(component);
        }
    }
}

export class VCard extends VBaseContainer {
    constructor(element) {
        super(element);
    }
}

