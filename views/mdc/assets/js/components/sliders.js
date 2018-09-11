import {VBaseComponent} from "./base-component";
import {eventHandlerMixin} from "./mixins/event-handler";
import {MDCSlider} from '@material/slider';
import {visibilityObserverMixin} from './mixins/visibility-observer';

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

        mdcSliderComponent.listen('MDCSlider:change', function (e){
            // Forward as a standard change event
            if ("createEvent" in document) {
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                element.dispatchEvent(evt);
            }
            else{
                element.fireEvent("onchange");
            }
        });
    }

    prepareSubmit(params) {
        params.push([this.name(), this.value()]);
     }

    name(){
        return this.element.getAttribute('data-name')
    }

    value(){
        return this.mdcComponent.value
    }

    clear(){
        this.setValue(0);
    }

    setValue(value){
        this.mdcComponent.value = value;
    }
}
