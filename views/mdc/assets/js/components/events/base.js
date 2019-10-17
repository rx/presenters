import 'core-js/features/array/flat';
import 'core-js/features/array/flat-map';
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
     * inputs retrieves relevant input elements for this event.
     *
     * - If an `input_tag` has been provided, all matching tagged elements are
     *   included.
     * - If this component is a input element, it is included.
     * - If this component has input elements, its input elements are included.
     *   If not, the input elements of the nearest container (dialog or content)
     *   are included.
     * @return {Array<HTMLElement>}
     */
    inputs() {
        const components = [];

        // Collect tagged components, if applicable:
        if (this.options.input_tag) {
            const taggedComponents = Array.from(this.taggedInputs())
                .filter((element) => element.vComponent)
                .map((element) => element.vComponent);

            components.push(taggedComponents);
        }

        let comp = this.component();

        if (comp) {
            // Include ourselves if we're a form field component, but not a
            // container:
            if (comp.respondTo('prepareSubmit') && !comp.respondTo('inputs')) {
                components.push(comp);
            }
            else if (!comp.respondTo('inputs')) {
                // Defer to the component's closest container (card, content,
                // dialog, or form) if the component itself does not respond to
                // `inputs`:
                comp = this.closestContainer();
            }
        }

        // If the caller requested tagged_inputs assume they only want those inputs posted and
        // DO NOT include additional input from the component
        if (comp && comp.respondTo('inputs') && !this.options.input_tag) {
            components.push(comp);
        }

        // Map components to elements.
        // Containers are mapped to their child elements.
        // Form field components are mapped to their own element.
        const elements = components.flat().flatMap((comp) => {
            if (comp.respondTo('inputs')) {
                return Array.from(comp.inputs());
            }
            else if (comp.respondTo('prepareSubmit')) {
                return comp.element;
            }
        });

        // Deduplicate:
        return Array.from(new Set(elements));
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
