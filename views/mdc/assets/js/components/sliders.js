import {VBaseComponent, hookupComponents} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';
import {MDCSlider} from '@material/slider';
import {visibilityObserverMixin} from './mixins/visibility-observer';
import {VEvents} from './events';

export function initSliders(e) {
    console.debug('\tSliders');
    hookupComponents(e, '.v-slider', VSlider, MDCSlider);
}

export class VSlider extends visibilityObserverMixin(
    eventHandlerMixin(VBaseComponent)) {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        this.recalcWhenVisible(this);
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
        this.setValue(this.element.dataset.originalValue);
    }

    setValue(value) {
        this.mdcComponent.value = value;
    }

    isDirty() {
        return this.value() != this.element.dataset.originalValue;
    }

    initEventListener(eventName, eventHandler) {
        if (eventName === 'change') {
            eventName = 'MDCSlider:change';
        }
        super.initEventListener(eventName, eventHandler);
    }


    createEventHandler(actionsData) {
        return function(event) {
            // The MDC slider was firing duplicate change events - this prevents that
            if (!this.lastEvent ||
                (event.timeStamp - this.lastEvent.timeStamp) > 10.0) {
                new VEvents(actionsData, event).call();
            }
            this.lastEvent = event;
        };
    }
}
