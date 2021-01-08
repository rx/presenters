import {MDCNotchedOutline} from '@material/notched-outline';

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
  const labelWidth = component.querySelector('.mdc-floating-label').offsetWidth * .75;
  const notchedOutline = new MDCNotchedOutline(component.querySelector('.mdc-notched-outline'));
  notchedOutline.notch(labelWidth);
}


export function initMultiSelects(e) {
  console.debug('\tMultiSelects');
  let components = e.querySelectorAll('.v-multi-select');
  if (components.length === 0 && e.offsetParent && e.offsetParent.vComponent !== undefined) {
    components = document.querySelectorAll('.v-multi-select');
  }
  if (components) {
    for (let component of components) {
      // toggle handler
      component.addEventListener('click', createToggleHandler(component));
      document.addEventListener('click', createCloseHandler(component));
      // label handler
      createValueDescriptionHandler(component);
      setCurrentValueDescription(component);
      // field label notch
      setLabelNotch(component);
    }
  }
}


