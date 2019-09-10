import {MDCChip} from '@material/chips';
import {MDCChipSet} from '@material/chips';
import {eventHandlerMixin} from "./mixins/event-handler";
import {VBaseComponent, hookupComponents} from './base-component';

export function initChips(e) {
    console.debug('\tChips');
    hookupComponents(e, '.v-chip-set', VChipSet, MDCChipSet);
    hookupComponents(e, '.v-chip', VChip, MDCChip);
}

export class VChip extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);

        let parentClassList = element.parentElement.classList;
        this.selectable = parentClassList.contains('mdc-chip-set--choice') || parentClassList.contains('mdc-chip-set--filter');

        this.element.addEventListener('click', (e) => {
            if (this.selectable) {
                this.mdcComponent.selected = !this.mdcComponent.selected;
            }
        });
    }

    // Called to collect data for submission
    prepareSubmit(params) {
        if(this.value() !== ''){
            if(!this.selectable || (this.selectable && this.mdcComponent.selected)) {
                params.push([this.name(), this.value()]);
            }
        }
    }

    name(){
        return this.element.getAttribute('data-name');
    }

    value(){
        return this.element.getAttribute('data-value');
    }

    clear(){
        console.debug('Chip clear is a no-op');
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
