import {VBaseContainer} from "./base-container";
import {VBaseComponent, hookupComponents} from "./base-component";
import {eventHandlerMixin} from "./mixins/event-handler";

export function initFileInputs() {
  console.log('\tFile Inputs');
  hookupComponents('.v-file-input', VFileInput, null);
}

export class VFileInput extends eventHandlerMixin(VBaseComponent) {
  constructor(element, mdcComponent) {
    super(element, mdcComponent);

    this.input = element.querySelector('input[type=file]');
    this.label = element.querySelector('label');

    ['change', 'mouseup'].forEach((e) => {
      element.addEventListener(e, () => this.handleFileSelection());
    });
  }

  // From an example based on: https://www.quirksmode.org/dom/inputfile.html
  handleFileSelection() {
    if (!this.input.value) return;

    var value = this.input.value.replace(/^.*[\\\/]/, '');
    this.label.innerText = value;
  }
}
