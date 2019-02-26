import {VBaseComponent} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';

export class VBaseToggle extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);

        this.input = element.querySelector('input');
    }

    prepareSubmit(params) {
        if (this.submittedValue()) {
            params.push([this.name(), this.submittedValue()]);
        }
    }

    submittedValue() {
        return this.input.checked ? this.value() : this.offValue();
    }

    name() {
        return this.input.name;
    }

    value() {
        return this.input.dataset.on;
    }

    offValue() {
        return this.input.dataset.off;
    }

    clear() {
        this.input.checked = false;
    }

    setValue(value) {
        this.input.dataset.on = value;
    }
}
