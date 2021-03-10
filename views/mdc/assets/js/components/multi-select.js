import {MDCNotchedOutline} from '@material/notched-outline';
import {hookupComponentsManually} from './base-component';

export function initMultiSelects(root) {
  console.debug('\tMultiSelects');
  hookupComponentsManually(root, '.v-multi-select', function(element) {
    return new VMultiSelect(root, element);
  });
}

export class VMultiSelect {

  constructor(root, element) {
    this.vComponent = root.vComponent;
    this.element = element;
    this.hidden_on_create = null;
    this.mutationObserver = null;
    this.setEventListeners();
    this.setLabelHandlers();
    // this.setMutationHandler();
  }

  setEventListeners() {
    this.element.addEventListener('click', createToggleHandler(this.element));
    document.addEventListener('click', createCloseHandler(this.element));
  }

  setLabelHandlers() {
    createValueDescriptionHandler(this.element);
    setCurrentValueDescription(this.element);
    setLabelNotch(this.element);
  }

  // Attempt to re-render when a hidden component becomes visible
  // setMutationHandler() {
  //   this.hidden_on_create = this.element.offsetParent === null;
  //   if (this.hidden_on_create) {
  //     this.mutationObserver = new MutationObserver(
  //       function(mutations) {
  //         console.log('Run mutation observer');
  //         if (this.vComponent.hidden_on_create) {
  //           if (this.vComponent.element.offsetParent !== null) {
  //             // Parent is now visible.
  //             this.vComponent.hidden_on_create = false;
  //             var event = document.createEvent('HTMLEvents');
  //             event.initEvent('resize', true, false);
  //             this.vComponent.element.dispatchEvent(event);
  //             createValueDescriptionHandler(this.vComponent.element);
  //             setCurrentValueDescription(this.vComponent.element);
  //             setLabelNotch(this.vComponent.element);
  //             this.disconnect();
  //           }
  //         }
  //       });
  //     this.mutationObserver.vComponent = this;
  //     this.mutationObserver.observe(this.vComponent.root.documentElement || this.vComponent.root.host,
  //       {
  //         attributes: true,
  //         subtree: true,
  //       });
  //   }
  // }
}

function createToggleHandler(component) {
  return function (event) {
    if (!event.target.classList.contains('v-multi-select--option')) {
      component.querySelector('.v-multi-select--options-list').classList.toggle('v-hidden');
      component.classList.toggle('mdc-select--focused');
    }
  }
}

function createCloseHandler(component) {
  return function (event) {
    if (!event.target.className.match(/[\w-]*v-multi-select[\w-]*/g)) {
      component.querySelector('.v-multi-select--options-list').classList.add('v-hidden');
      component.classList.remove('mdc-select--focused');
    }
  }
}

function createValueDescriptionHandler(component) {
  const listElements = component.querySelectorAll('.v-multi-select--option');
  for (let element of listElements) {
    element.addEventListener('change', function(e){
      setCurrentValueDescription(component);
    })
  }
}

function setCurrentValueDescription(component) {
  const selectedElements = Array.from(component.querySelectorAll('.v-multi-select--option')).filter((e) => e.checked );
  let msg = selectedElements.length + ' selected';
  if (selectedElements.length === 1 && selectedElements[0].labels.length === 1) {
    msg = selectedElements[0].labels[0].innerText;
  }
  component.querySelector('.v-multi-select--current-values').innerText = msg;
}

function setLabelNotch(component) {
  console.log('set label notch');
  const labelWidth = component.querySelector('.mdc-floating-label').offsetWidth * .75;
  const notchedOutline = new MDCNotchedOutline(component.querySelector('.mdc-notched-outline'));
  notchedOutline.notch(labelWidth);
}



