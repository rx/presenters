import {VBaseComponent, hookupComponents} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';

export function initFileInputs() {
    console.log('\tFile Inputs');
    hookupComponents('.v-file-input', VFileInput, null);
}

export class VFileInput extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);

        this.input = element.querySelector('input[type=file]');
        this.label = element.querySelector('label');
        this.accept = element.dataset.accept;
        this.preview = JSON.parse(element.dataset.preview);
        ['change'].forEach((e) => {
            element.addEventListener(e, (e) => this.handleFileSelection(e),
                false);
        });
    }

    previewComponent(e) {
        if (!this.preview) return null;
        for (const previewId of this.preview) {
            const elem = document.getElementById(previewId);
            if (elem && elem.vComponent && elem.vComponent.preview) {
                const filename = e.target.files[0];
                const fr = new FileReader();
                fr.onload = (e) => {
                    this.previewSelection(e, elem.vComponent);
                };
                if (this.accept.startsWith('text')) {
                    fr.readAsText(filename);
                }
                else {
                    fr.readAsDataURL(filename);
                }

            }
            else {
                console.log(
                    `WARNING: Unable to find previewable element with id: ${previewId}
1) Make sure you have an element with that id on your page
2) Make sure the Componenet or Plugin supports the preview option for the request mime type`);
            }
        }
    }

    previewSelection(e, previewComp) {
        previewComp.preview(e.target.result, this.accepts, this.file);
    }

    // From an example based on: https://www.quirksmode.org/dom/inputfile.html
    handleFileSelection(e) {
        this.file = e.target.files[0];
        this.label.innerText = this.file.name;
        this.previewComponent(e);
    }
}
