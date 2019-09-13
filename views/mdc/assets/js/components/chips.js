import {MDCChip} from '@material/chips';
import {MDCChipSet} from '@material/chips';
import {eventHandlerMixin} from './mixins/event-handler';
import {VBaseComponent, hookupComponentsManually} from './base-component';

export const EVENT_SELECT = 'select';
export const EVENT_DESELECT = 'deselect';

export function initChips(e) {
    console.debug('\tChips');

    // The chip set > chips hierarchy is established differently than other
    // components: a chip set constructs and manages Chip components for its
    // chip elements.
    //
    // Because the chip set constructs chips on its own, a `hookupComponents`
    // call for chips is not needed.

    hookupComponentsManually(e, '.v-chip-set', function(element) {
        const selectable = element.classList.contains('v-chip-set--has-variant');
        const chipFactory = voomChipFactoryFactory(selectable);
        const mdcComponent = new MDCChipSet(element, undefined, chipFactory);

        return new VChipSet(element, mdcComponent);
    });
}

export class VChip extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);

        let parentClassList = element.parentElement.classList;
        this.selectable = parentClassList.contains('mdc-chip-set--choice') || parentClassList.contains('mdc-chip-set--filter');

        this.element.addEventListener('click', (e) => {
            if (this.selectable) {
                this.mdcComponent.selected = !this.mdcComponent.selected;

                const eventType = this.mdcComponent.selected
                    ? EVENT_SELECT
                    : EVENT_DESELECT;
                const selectionEvent = new Event(eventType);

                this.element.dispatchEvent(selectionEvent);
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

    name() {
        return this.element.getAttribute('data-name');
    }

    value() {
        return this.element.getAttribute('data-value');
    }

    clear() {
        console.debug('Chip clear is a no-op');
    }

    setValue(value) {
        this.element.setAttribute('data-value', value);
    }
}

// Returns a function which constructs VChip components.
function voomChipFactoryFactory(selectable) {
    return function(element) {
        const mdcComponent = new MDCChip(element);
        mdcComponent.shouldRemoveOnTrailingIconClick = !selectable;

        return new VChip(element, mdcComponent);
    };
}

export class VChipSet extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
    }
}
