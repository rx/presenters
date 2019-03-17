export function eventRoot(e) {
    return e.target.shadowRoot ||
        (e.currentTarget || e.target).closest('.v-component').vComponent.root ||
        document;
}
