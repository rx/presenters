import {MDCSelect} from '@material/select';

const select = new MDCSelect(document.querySelector('.mdc-select'));
select.listen('MDCSelect:change', () => {
  alert(`Selected "${select.selectedOptions[0].textContent}" at index ${select.selectedIndex} ` +
        `with value "${select.value}"`);
});