export default function getRoot(element) {
    if (element instanceof HTMLDocument) return element;
    let rootElement = element.ownerDocument;
    if (!rootElement) {
        rootElement = element.shadowRoot();
    }
    return rootElement;
}
