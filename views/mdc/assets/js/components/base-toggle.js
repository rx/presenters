import {VBaseComponent} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';
import {dirtyableMixin} from './mixins/dirtyable';

export class VBaseToggle extends dirtyableMixin(eventHandlerMixin(VBaseComponent)) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);

        this.input = element.querySelector('input');

        element.addEventListener('V:postFailed', (event) => {
            // Revert to previous checked state on failed post.
            this.mdcComponent.checked = !this.mdcComponent.checked;
        });

        this.originalValue = this.input.checked;
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
        return this.input.value;
    }

    offValue() {
        return this.input.dataset.off;
    }

    clear() {
        this.input.checked = false;
    }

    reset() {
        this.input.checked = this.originalValue;
    }

    setValue(value) {
        this.input.value = value;
    }

    isDirty() {
        return this.dirtyable && this.input.checked !== this.originalValue;
    }
}
