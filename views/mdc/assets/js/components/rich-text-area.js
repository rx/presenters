import Quill from "quill";
import {hookupComponents, VBaseComponent} from "./base-component";
import {eventHandlerMixin} from "./mixins/event-handler";

var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'color': [] }],
    [{ 'align': [] }],
    ['blockquote'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],
    [{ 'indent': '-1'}, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    ['link', 'image', 'video'],
    ['clean']
];

export function initRichTextArea(e) {
    console.debug('\tRich Text Area');
    hookupComponents(e, '.v-rich-text-area-container', VRichTextArea, null);
}

export class VRichTextArea extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);

        this.quillEditorElement = element.querySelector('.v-rich-text-area');
        this.quill = new Quill(this.quillEditorElement, {
            modules: {
                toolbar: toolbarOptions
            },
            theme: 'snow',
            placeholder: this.quillEditorElement.dataset.placeholder

        });

        this.element.dataset.originalValue = this.value();
    }

    prepareSubmit(params) {
        params.push([this.name(), this.value()]);
    }

    name() {
        return this.quillEditorElement.dataset.name;
    }

    value() {
        const QUILL_EMPTY_DOC = "<p><br></p>";
        // If the quill editor is empty calling innerHTML will still return '<p><br/></p>' which it
        // uses to represent an empty doc.
        var doc = this.quill.root.innerHTML;
        return doc == QUILL_EMPTY_DOC ? '' : doc;
    }

    clear() {
        if (this.value() !== '') {
            this.setValue('');
        }
    }

    reset() {
        this.setValue(this.element.dataset.originalValue);
    }

    setValue(value) {
        this.quill.root.innerHTML = value;
    }

    isDirty() {
        return this.value() !== this.element.dataset.originalValue;
    }
}
