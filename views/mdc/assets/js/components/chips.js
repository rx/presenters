import {MDCChip} from '@material/chips';
import {MDCChipSet} from '@material/chips';
import {eventHandlerMixin} from './mixins/event-handler';
import {VBaseComponent, hookupComponentsManually} from './base-component';

export const EVENT_SELECT = 'select';
export const EVENT_DESELECT = 'deselect';
export const EVENT_TRAILING_ICON_CLICK = 'trailing_icon_click';

const SELECTABLE_VARIANT_CLASS = 'v-chip-set--selectable-variant';

export function initChips(e) {
    console.debug('\tChips');

    // The chip set > chips hierarchy is established differently than other
    // components: a chip set constructs and manages Chip components for its
    // chip elements.
    //
    // Because the chip set constructs chips on its own, a `hookupComponents`
    // call for chips is not needed.

    hookupComponentsManually(e, '.v-chip-set', function(element) {
        const selectable = element.classList.contains(SELECTABLE_VARIANT_CLASS);
        const chipFactory = voomChipFactoryFactory(selectable);
        const mdcComponent = new MDCChipSet(element, undefined, chipFactory);

        return new VChipSet(element, mdcComponent);
    });
}

export class VChip extends eventHandlerMixin(VBaseComponent) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);

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

        if (this.trailingIcon) {
            this.trailingIcon.addEventListener('click', (e) => {
                // Don't propagate click upwards to chip <button>:
                e.stopPropagation();

                const clickEvent = new Event(EVENT_TRAILING_ICON_CLICK);

                this.element.dispatchEvent(clickEvent);
            });
        }
    }

    get trailingIcon() {
        return this.element.querySelector(
            '.mdc-chip__icon.mdc-chip__icon--trailing'
        );
    }

    // Called to collect data for submission
    prepareSubmit(params) {
        if (this.shouldSubmitParams) {
            params.push([this.name(), this.value()]);
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

    get shouldSubmitParams() {
        return this.value() && (!this.selectable || this.mdcComponent.selected);
    }

    get selectable() {
        return this.element.parentElement.classList.contains(
            SELECTABLE_VARIANT_CLASS
        );
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
