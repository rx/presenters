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
const EMPTY_VALUE = '';

export function initRichTextArea(e) {
    console.debug('\tRich Text Area');
    hookupComponents(e, '.v-rich-text-area-container', VRichTextArea, null);
}

export class VRichTextArea extends dirtyableMixin(eventHandlerMixin(VBaseComponent)) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);

        configureQuill();
        registerBlots();

        this.quillWrapper = element.querySelector('.v-rich-text-area');
        this.quill = new Quill(this.quillWrapper, {
            modules: {toolbar: toolbarOptions},
            bounds: this.quillWrapper,
            theme: 'snow',
            placeholder: this.quillWrapper.dataset.placeholder
        });
        this.fixedUpContentElement = element.querySelector('.v-rich-text-area--fixed-up-content')
        this.originalValue = this.value();
        this.quillEditor = this.quillWrapper.querySelector('.ql-editor');

        if (element.hasAttribute('disabled')) {
            this.quill.enable(false);
        }

        hookupCustomToolbarButtons(this);

        // Fix-ups:
        this.updateFixedContentElement();
        this.quill.on('text-change', () => this.updateFixedContentElement());

        adjustEditorStyles(this);
    }

    prepareSubmit(params) {
        params.push([this.name(), this.value()]);
    }

    name() {
        return this.quillWrapper.dataset.name;
    }

    value() {
        const document = this.fixedUpContentElement.innerHTML;

        return this.quill.editor.isBlank() ? EMPTY_VALUE : document;
    }

    clear() {
        if (this.value() !== EMPTY_VALUE) {
            this.setValue(EMPTY_VALUE);
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

    updateFixedContentElement() {
        const rawDocument = this.quill.root.innerHTML;

        this.fixedUpContentElement.innerHTML = convertLists(rawDocument);
    }
}

function adjustEditorStyles(richTextArea) {
    // The editor element is not created until Quill has been initialized, so
    // its styles must be adjusted dynamically post-construction.
    const initialHeight = richTextArea.element.dataset.initialHeight;

    richTextArea.quillEditor.style.height = initialHeight;
    richTextArea.quillEditor.style.minHeight = initialHeight;
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

// Quill 1 is not capable of generating structurally-sound nested lists. Instead
// of generated nested list elements, all list items are generated at the same
// level. Indentation and list item numbers are handled by various `indent` CSS
// classes and CSS counters. Eugh.
// see https://github.com/quilljs/quill/issues/979

// from https://github.com/quilljs/quill/issues/979#issuecomment-381151479.
function convertLists(richtext) {
    const tempEl = window.document.createElement('div');
    tempEl.setAttribute('style', 'display: none;');
    tempEl.innerHTML = richtext;

    ['ul','ol'].forEach((type) => {
        const startTag = `::start${type}::::/start${type}::`;
        const endTag = `::end${type}::::/end${type}::`;

        // Grab each list, and work on it in turn
        Array.from(tempEl.querySelectorAll(type)).forEach((outerListEl) => {
            const listChildren = Array.from(outerListEl.children).filter((el) => el.tagName === 'LI');

            // Account for the fact that the first li might not be at level 0
            const firstLi = listChildren[0];
            firstLi.before(startTag.repeat(getListLevel(firstLi)));

            // Now work through each li in this list
            listChildren.forEach((listEl, index) => {
                const currentLiLevel = getListLevel(listEl);
                if (index < listChildren.length - 1) {
                    const difference = getListLevel(listChildren[index + 1]) - currentLiLevel;

                    // we only need to add tags if the level is changing
                    if (difference > 0) {
                        listChildren[index + 1].before(startTag.repeat(difference));
                    } else if (difference < 0) {
                        listEl.after(endTag.repeat(-difference));
                    }
                } else {
                    listEl.after(endTag);
                }
            });
            outerListEl.after(endTag);
        });
    });

    //  Get the content in the element and replace the temporary tags with new ones
    let newContent = tempEl.innerHTML;
    newContent = newContent.replace(/::startul::::\/startul::/g, '<ul>');
    newContent = newContent.replace(/::endul::::\/endul::/g, '</ul>');
    newContent = newContent.replace(/::startol::::\/startol::/g, '<ol>');
    newContent = newContent.replace(/::endol::::\/endol::/g, '</ol>');

    tempEl.remove();
    return newContent;
}

function getListLevel(el) {
    const className = el.className || '0';
    return +className.replace(/[^\d]/g, '');
}
