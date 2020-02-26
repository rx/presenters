import {VBaseComponent, hookupComponents} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';
import {MDCSlider} from '@material/slider';
import {visibilityObserverMixin} from './mixins/visibility-observer';
import {VEvents} from './events';
import {dirtyableMixin} from './mixins/dirtyable';

export function initSliders(e) {
    console.debug('\tSliders');
    hookupComponents(e, '.v-slider', VSlider, MDCSlider);
}

export class VSlider extends dirtyableMixin(visibilityObserverMixin(
    eventHandlerMixin(VBaseComponent))) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        this.recalcWhenVisible(this);
        this.originalValue = this.value();
    }

    prepareSubmit(params) {
        params.push([this.name(), this.value()]);
    }

    name() {
        return this.element.getAttribute('data-name');
    }

    value() {
        return this.mdcComponent.value;
    }

    clear() {
        this.setValue(0);
    }

    reset() {
        this.setValue(this.originalValue);
    }

    setValue(value) {
        this.mdcComponent.value = value;
    }

    isDirty() {
        return this.dirtyable && this.value() !== this.originalValue;
    }

    initEventListener(eventName, eventHandler) {
        if (eventName === 'change') {
            eventName = 'MDCSlider:change';
        }
        super.initEventListener(eventName, eventHandler);
    }


    createEventHandler(actionsData, root) {
        return function(event) {
            // The MDC slider was firing duplicate change events - this prevents that
            if (!this.lastEvent ||
                (event.timeStamp - this.lastEvent.timeStamp) > 10.0) {
                new VEvents(actionsData, event, root).call();
            }
            this.lastEvent = event;
        };
    }
}
