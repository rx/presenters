import {MDCSelect} from '@material/select';
import {VBaseComponent, hookupComponents} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';
import {visibilityObserverMixin} from "./mixins/visibility-observer";

export function initSelects() {
    console.log('\tSelects');
    hookupComponents('.v-select', VSelect, MDCSelect);
}


// export class VSelect extends visibilityObserverMixin(eventHandlerMixin(VBaseComponent)) {
export class VSelect extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        this.select = element.querySelector('select');
        this.select.vComponent = this;
        //this.recalcWhenVisible(this);
    }

    prepareSubmit(params) {
        params.push([this.name(), this.value()]);
    }

    name() {
        return this.select.name;
    }

    value() {
        return this.select.options.length === 0 ? null : this.select.options[this.select.selectedIndex].value;
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

    setValue(value) {
        this.select.value = value;
    }

    isDirty() {
        return this.value() != this.element.dataset.originalValue;
    }
}
