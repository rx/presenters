import {VBaseComponent, hookupComponents} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';
import {dirtyableMixin} from './mixins/dirtyable';

export function initFileInputs(e) {
    console.debug('\tFile Inputs');
    hookupComponents(e, '.v-file-input', VFileInput, null);
}

export class VFileInput extends dirtyableMixin(eventHandlerMixin(VBaseComponent)) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);

        this.input = element.querySelector('input[type=file]');
        this.accept = element.dataset.accept;
        this.preview = JSON.parse(element.dataset.preview);
        ['change'].forEach((e) => {
            element.addEventListener(e, (e) => this.handleFileSelection(e),
                false);
        });
        this.originalValue = this.input.value;
    }

    prepareSubmit(params) {
        params.push([this.name(), this.value()]);
    }

    name() {
        return this.input.name;
    }

    value() {
        return this.input.files[0];
    }

    previewComponent(e) {
        if (!this.preview) return null;
        for (const previewId of this.preview) {
            const elem = this.root.querySelector(`#${previewId}`);

            if (elem && elem.vComponent && elem.vComponent.preview) {
                this.file = e.target.files[0];
                const fr = new FileReader();
                fr.onload = (e) => {
                    this.previewSelection(e, elem.vComponent);
                };
                if (this.accept.startsWith('text')) {
                    fr.readAsText(this.file);
                }
                else {
                    fr.readAsDataURL(this.file);
                }

            }
            else {
                console.warn(
                    `WARNING: Unable to find previewable element with id: ${previewId}
1) Make sure you have an element with that id on your page
2) Make sure the Componenet or Plugin supports the preview option for the request mime type`);
            }
        }
    }

    previewSelection(e, previewComp) {
        previewComp.preview(e.target.result, this.accepts, this.file);
    }

    isDirty() {
        return this.dirtyable && this.input.value !== this.originalValue;
    }

    // From an example based on: https://www.quirksmode.org/dom/inputfile.html
    handleFileSelection(e) {
        this.previewComponent(e);
    }
}
