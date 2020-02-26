import {MDCSelect} from '@material/select';
import {VBaseComponent, hookupComponents} from './base-component';
import {visibilityObserverMixin} from "./mixins/visibility-observer";
import {dirtyableMixin} from './mixins/dirtyable';

export function initSelects(e) {
    console.debug('\tSelects');
    hookupComponents(e, '.v-select', VSelect, MDCSelect);
}

export class VSelect extends dirtyableMixin(visibilityObserverMixin(VBaseComponent)) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        this.select = element.querySelector('select');
        this.select.vComponent = this;
        this.recalcWhenVisible(this);
        this.originalValue = this.value();
    }

    prepareSubmit(params) {
        params.push([this.name(), this.value()]);
    }

    name() {
        return this.select.name;
    }

    value() {
        return this.select.options.length === 0 || this.select.selectedIndex === -1 ? null : this.select.options[this.select.selectedIndex].value;
    }

    clear() {
        let before = this.select.selectedIndex;
        this.select.selectedIndex = 0;
        if (before !== 0) {
            var event = new InputEvent('input', {
                view: window,
                bubbles: true,
                cancelable: true
              });
            this.select .dispatchEvent(event);
        }
    }

    reset() {
        this.select.value = this.originalValue;
    }

    setValue(value) {
        this.select.value = value;
    }

    isDirty() {
        return this.dirtyable && this.value() !== this.originalValue;
    }
}
