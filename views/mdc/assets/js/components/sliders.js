import {VBaseComponent} from "./base-component";
import {eventHandlerMixin} from "./mixins/event-handler";
import {MDCSlider} from '@material/slider';
import {visibilityObserverMixin} from './mixins/visibility-observer';
import {VEvents} from './events';

export function initSliders() {
    console.log('\tSliders');

    var components = document.querySelectorAll('.mdc-slider');
    for (var i = 0; i < components.length; i++) {
        var comp = components[i];
        if (!comp.vComponent) {
            comp.vComponent = new VSlider(comp, new MDCSlider(comp));
        }
    }
}

export class VSlider extends visibilityObserverMixin(eventHandlerMixin(VBaseComponent)) {
    constructor(element, mdcSliderComponent) {
        super(element);
        this.mdcComponent = mdcSliderComponent;
        this.recalcWhenVisible(this);
    }


    prepareSubmit(params) {
        params.push([this.name(), this.value()]);
    }

    name() {
        return this.element.getAttribute('data-name')
    }

    value() {
        return this.mdcComponent.value
    }

    clear() {
        this.setValue(0);
    }

    setValue(value) {
        this.mdcComponent.value = value;
    }

    initEventListener(eventName, eventHandler) {
        if (eventName === 'change') {
            eventName = 'MDCSlider:change';
        }
        super.initEventListener(eventName, eventHandler);
    }


    createEventHandler(actionsData) {
        return function (event) {
            // The MDC slider was firing duplicate change events - this prevents that
            if (!this.lastEvent || (event.timeStamp - this.lastEvent.timeStamp) > 10.0) {
                new VEvents(actionsData, event).call();
            }
            this.lastEvent = event;
        };
    }
}
