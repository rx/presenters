import {MDCChip} from '@material/chips';
import {MDCChipSet} from '@material/chips';
import {eventHandlerMixin} from "./mixins/event-handler";
import {VBaseComponent, hookupComponents} from './base-component';

export function initChips(e) {
    console.log('\tChips');
    hookupComponents(e, '.v-chip', VChip, MDCChip);
    hookupComponents(e, '.v-chip-set', VChipSet, MDCChipSet);
}

export class VChip extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }

    // Called to collect data for submission
    prepareSubmit(params) {
        if(this.value() !== ''){
            params.push([this.name(), this.value()]);
        }
    }

    name(){
        return this.element.getAttribute('data-name');
    }

    value(){
        return this.element.getAttribute('data-value');
    }

    clear(){
        console.log('\tChip clear is a no-op');
    }

    setValue(value){
        this.element.setAttribute('data-value', value);
    }
}

export class VChipSet extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }
}
