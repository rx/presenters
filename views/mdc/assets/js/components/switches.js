import {VBaseComponent, hookupComponents} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';
import {MDCSwitch} from '@material/switch';

export function initSwitches() {
    console.log('\tSwitches');
    hookupComponents('.v-switch', VSwitch, MDCSwitch);
}

export class VSwitch extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        this.input = element.querySelector('input');
    }

    prepareSubmit(params) {
        params.push([this.name(), this.value()]);
    }

    name() {
        return this.input.name;
    }

    value() {
        return this.input.value;
    }

    clear() {
        this.input.checked = false;
    }

    setValue(value) {
        this.input.value = value;
    }
}
