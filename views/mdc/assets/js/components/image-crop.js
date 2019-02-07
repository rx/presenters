import { VBaseContainer } from "./base-container";
import { hookupComponents } from "./base-component";

export function initImageCrop() {
  console.log('\tImageCrop');
  hookupComponents('.v-image-crop', VImageCrop, null);
}

export class VImageCrop extends VBaseContainer {
  constructor(element, mdcComponent) {
    super(element, mdcComponent);

    this.image = element.querySelector('img');
    this.handleCropEnd = this.handleCropEnd.bind(this);
    this.setupCroppr();
  }

  handleCropEnd(data) {
    const keys = Object.keys(data);
    const currentElem = this.element;
    keys.forEach(function(k) {
      const attrElem = currentElem.querySelector(`input[name=crop_${k}]`);
      if(attrElem) {
        attrElem.value = data[k];
      }
    });
  }

  setupCroppr() {
    if(typeof Croppr !== "function") {
      return;
    }

    this.croppr = new Croppr(this.image, {
      onCropEnd: this.handleCropEnd
    });
  }
}

