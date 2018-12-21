import Quill from "quill";
import {hookupComponents, VBaseComponent} from "./base-component";
import {eventHandlerMixin} from "./mixins/event-handler";

var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    //[{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    //[{ 'font': [] }],
    [{ 'align': [] }],
    ['link', 'image'],
    ['clean']                                         // remove formatting button
];

export function initRichTextArea() {
    console.log('\tRich Text Area');
    hookupComponents('.v-rich-text-area-container', VRichTextArea, null);
}

export class VRichTextArea extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);

        this.quillEditorElement = element.querySelector('.v-rich-text-area');
        this.quill = new Quill(this.quillEditorElement, {
            modules: {
                toolbar: toolbarOptions
            },
            theme: 'snow'//,
            // placeholder: this.quillEditorElement.dataset.placeholder
        });
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

    setValue(value) {
        this.quill.root.innerHTML = value;
    }
}