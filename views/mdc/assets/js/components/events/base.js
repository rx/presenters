import {VErrors} from './errors';
import {VUrls} from '../../utils/urls';

export class VBase extends VUrls {
    constructor(options, root) {
        super();
        this.options = options;
        this.root = root;
    }

    clearErrors() {
        new VErrors(this.root).clearErrors();
    }

    parentElement() {
        return this.root.getElementById(this.options.__parent_id__);
    }

    /**
     * taggedInputs retrieves all components matching this event's input_tag
     * value.
     * @return {NodeList}
     */
    taggedInputs() {
        const inputTag = this.options.input_tag;

        if (!inputTag) {
            return [];
        }

        const selector = `[data-input-tag="${inputTag}"]`;
        const inputs = this.root.querySelectorAll(selector);

        if (inputs.length < 1) {
            console.warn(
                `input_tag ${inputTag} matched 0 elements. Are you sure`
                + 'you\'ve specified the correct value?'
            );
        }

        return inputs;
    }

    /**
     * inputs retrieves relevant elements for this event.
     *
     * 1. If an `input_tag` has been provided, all matching elements are
     *    included.
     * 2. If this component is an element, it is included.
     * 3. If this component has inputs, its elements are included. If not,
     *    the elements of the nearest content container are included.
     * @return {Array<HTMLElement>}
     */
    inputs() {
        let elements = [];

        // Collect tagged elements, if applicable:
        if (this.options.input_tag) {
            elements = Array.from(this.taggedInputs());
        }

        let comp = this.component();

        if (comp) {
            // Include ourselves if we're a form component (but not a
            // container):
            if (comp.respondTo('prepareSubmit') && !comp.respondTo('inputs')) {
                elements.push(comp.element);
            }
            else if (!comp.respondTo('inputs')) {
                // Defer to the component's closest content container if the
                // component itself does not respond to `inputs`:
                comp = this.closestContainer();
            }
        }

        if (comp
            && comp.respondTo('inputs')
            // skip if we've previously grabbed elements via input_tag:
            && comp.element.dataset.inputTag !== this.options.input_tag
        ) {
            elements = elements.concat(...comp.inputs());
        }

        return elements;
    }

    /**
     * inputComponents retrieves the Component for each of this event's
     * relevant input elements.
     * @return {Array<VBaseComponent>}
     */
    inputComponents() {
        return this.inputs()
            .filter((element) => element.vComponent)
            .map((element) => element.vComponent);
    }

    /**
     * inputValues retrieves submit values for each of this event's relevant
     * input elements.
     * @return {Array}
     */
    inputValues() {
        const params = [];

        this.inputComponents()
            .filter((comp) => comp.respondTo('prepareSubmit'))
            .map((comp) => comp.prepareSubmit(params));

        return params;
    }

    component() {
        const parent = this.parentElement();

        return parent ? parent.vComponent : null;
    }

    validate() {
        const comp = this.component();

        if (comp) {
            return comp.validate();
        }

        return [];
    }

    closestContainer() {
        const element = this.closestContainerElement();

        if (!element) {
            return null;
        }

        return element.vComponent;
    }

    closestContainerElement() {
        const comp = this.component();

        if (!(comp && comp.element)) {
            return null;
        }

        return comp.element.closest('[data-is-container]');
    }
}
