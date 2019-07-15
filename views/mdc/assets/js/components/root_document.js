export default function getRoot(element) {
    let e = element;
    while (e && e.nodeType != 11) { // 11 = DOCUMENT_FRAGMENT_NODE
        e = e.parentNode;
    }
    let shadowRoot = null;
    if (e) {
        shadowRoot = e.host.shadowRoot;
    }

    let documentRoot = null;
    if (element.nodeType == 9) {
        documentRoot = element;
    }
    return shadowRoot || documentRoot || element.ownerDocument;
}
