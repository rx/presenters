import { VBaseContainer } from "./base-container";
import { hookupComponents } from "./base-component";

export function initImageCrop() {
  console.log('\tImageCrop');
  hookupComponents('.v-image', VImageCrop, null);
}

export class VImageCrop extends VBaseContainer {
  constructor(element, mdcComponent) {
    super(element, mdcComponent);
  }
}

