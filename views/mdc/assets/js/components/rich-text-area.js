import Quill from "quill";
import {HorizontalRuleBlot} from './rich-text-area/horizontal-rule-blot';
import {hookupComponents, VBaseComponent} from "./base-component";
import {eventHandlerMixin} from "./mixins/event-handler";
import {dirtyableMixin} from './mixins/dirtyable';

// These Blots will be registered with Quill.
const blots = [
    HorizontalRuleBlot,
];
const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'color': [] }],
    [{ 'align': [] }],
    ['blockquote', 'horizontal-rule'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],
    [{ 'direction': 'rtl' }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'size': ['xx-small', false, 'large', 'x-large'] }],
    ['link', 'image', 'video'],
    ['clean']
];
const QUILL_EMPTY_DOC = "<p><br></p>";

export function initRichTextArea(e) {
    console.debug('\tRich Text Area');
    hookupComponents(e, '.v-rich-text-area-container', VRichTextArea, null);
    configureQuill();
    registerBlots();
}

export class VRichTextArea extends dirtyableMixin(eventHandlerMixin(VBaseComponent)) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);

        this.quillEditorElement = element.querySelector('.v-rich-text-area');
        this.quill = new Quill(this.quillEditorElement, {
            modules: {toolbar: toolbarOptions},
            theme: 'snow',
            placeholder: this.quillEditorElement.dataset.placeholder
        });
        this.originalValue = this.value();

        hookupCustomToolbarButtons(this);
    }

    prepareSubmit(params) {
        params.push([this.name(), this.value()]);
    }

    name() {
        return this.quillEditorElement.dataset.name;
    }

    value() {
        // If the quill editor is empty calling innerHTML will still return
        // '<p><br/></p>' which it uses to represent an empty doc.
        var doc = this.quill.root.innerHTML;
        return doc == QUILL_EMPTY_DOC ? '' : doc;
    }

    clear() {
        if (this.value() !== '') {
            this.setValue('');
        }
    }

    reset() {
        this.setValue(this.originalValue);
    }

    setValue(value) {
        this.quill.root.innerHTML = value;
    }

    isDirty() {
        return this.dirtyable
            && this.value().localeCompare(this.originalValue) !== 0;
    }
}

const blotRegistry = new WeakSet();

function registerBlots() {
    for (const blot of blots) {
        if (blotRegistry.has(blot)) {
            continue;
        }

        // Set required Blot attributes:
        blot.blotName = blot.name;
        blot.tagName = blot.tag;

        Quill.register(blot);
        blotRegistry.add(blot)
    }
}

function hookupCustomToolbarButtons(vRichTextArea) {
    for (const blotClass of blots) {
        const {name, action} = blotClass;
        const buttons = vRichTextArea.element.querySelectorAll(`.ql-${name}`);

        for (const button of buttons) {
            // Invoke the Blot's action when button is clicked:
            button.addEventListener('click', (event) => {
                action(vRichTextArea.quill, event);
            });
        }
    }
}

function configureQuill() {
    // Inform Quill that it should decorate text objects with inline styles
    // instead of Quill CSS classes when modifying text:
    const sizeAttributor = Quill.import('attributors/style/size');
    sizeAttributor.whitelist = [
        'xx-small',
        'x-small',
        'small',
        'medium',
        'large',
        'x-large',
        'xx-large',
        false
    ];

    const styleAttributors = [
        sizeAttributor,
        Quill.import('attributors/style/align'),
        Quill.import('attributors/style/direction'),
    ];

    for (const attributor of styleAttributors) {
        Quill.register(attributor, true);
    }
}
