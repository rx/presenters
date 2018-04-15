import {MDCSelect} from '@material/select';

export function initSelects() {
    console.log('\tSelects');
    var components = document.querySelectorAll('.mdc-select');
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if(!component.mdcComponent) {
            component.mdcComponent = MDCSelect.attachTo(component);
        }
    }
}


// mdc.select.MDCSelect.attachTo(document.getElementById('hero-js-select'));
//        mdc.select.MDCSelect.attachTo(document.getElementById('js-pre-selected'));
//        mdc.select.MDCSelect.attachTo(document.getElementById('optgroup-js-select'));
//
//        var root = document.getElementById('js-select');
//        var nativeSelect = root.querySelector('.mdc-select__native-control');
//        var boxCurrentlySelected = document.getElementById('currently-selected');
//        var select = new mdc.select.MDCSelect(root);
//        var boxDemoWrapper = document.getElementById('demo-wrapper');
//        var rtlCb = document.getElementById('rtl');
//        var alternateColorsCb = document.getElementById('alternate-colors');
//        var disabledCb = document.getElementById('disabled');
//        var setSelectedButton = document.getElementById('set-selected-index-zero-button');
//        var setValueMeatButton = document.getElementById('set-value-meat-button');
//        function updateSelectedTextContent() {
//          var item = nativeSelect.selectedOptions[0];
//          var index = nativeSelect.selectedIndex;
//          if (item) {
//            boxCurrentlySelected.textContent = '"' + item.textContent + '" at index ' + index +
//              ' with value "' + nativeSelect.value + '"';
//          }
//        }
//        root.addEventListener('change', function() {
//          updateSelectedTextContent();
//        });
//        rtlCb.addEventListener('change', function() {
//          if (rtlCb.checked) {
//            boxDemoWrapper.setAttribute('dir', 'rtl');
//          } else {
//            boxDemoWrapper.removeAttribute('dir');
//          }
//        });
//        alternateColorsCb.addEventListener('change', function() {
//          root.classList[alternateColorsCb.checked ? 'add' : 'remove']('demo-select-custom-colors');
//        });
//        disabledCb.addEventListener('change', function() {
//          select.disabled = disabledCb.checked;
//        });
//        setSelectedButton.addEventListener('click', function() {
//          select.selectedIndex = 0;
//          updateSelectedTextContent();
//        });
//        setValueMeatButton.addEventListener('click', function() {
//          select.value = 'meat';
//          updateSelectedTextContent();
//        });