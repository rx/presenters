import {VBaseComponent, hookupComponents} from './base-component';
import {eventHandlerMixin} from './mixins/event-handler';

export function initPlugins(e) {
    console.log('\tPlugins');
    hookupComponents(e, '.v-plugin', VPluginComponent);
}

// Delegating plugin class. Allows a plugin to define a class-name as a data
// element, then contstructs that class and deligates componeent lifecycle
// events to the class.
export class VPluginComponent extends eventHandlerMixin(VBaseComponent) {
    constructor(element) {
        super(element);
        const pluginClassName = this.element.dataset.pluginCallback;
        if (pluginClassName) {
            var PluginClass = null;
            if (!/^[$_a-z][$_a-z0-9.]*$/i.test(pluginClassName)) {
                console.error(`Invalid class name: $(pluginClassName)`);
            }
            else {
                PluginClass = eval(pluginClassName);
            }
            if (PluginClass) {
                this.element.vPlugin = new PluginClass(element);
            }
            else {
                console.error(
                    `Unable to find a plugin class with name ${pluginClassName}`);
            }

        }
    }

    prepareSubmit(params) {
        if (this.element.vPlugin && this.element.vPlugin.prepareSubmit) {
            this.element.vPlugin.prepareSubmit(params);
        }
    }

    validate(formData) {
        if (this.element.vPlugin && this.element.vPlugin.name) {
            return this.element.vPlugin.validate(formData);
        }
        return super.validate(formData);
    }

    clear() {
        if (this.element.vPlugin && this.element.vPlugin.name) {
            return this.element.vPlugin.clear();
        }
    }

    onShow() {
        if (this.element.vPlugin && this.element.vPlugin.onShow) {
            return this.element.vPlugin.onShow();
        }
    }

    initEventListener(eventName, eventHandler) {
        if (this.element.vPlugin && this.element.vPlugin.initEventListener) {
            this.element.vPlugin.initEventListener(eventName, eventHandler);
        }
        else {
            super.initEventListener(eventName, eventHandler);
        }
    }

    preview(result, acceptsMimeTypes, e) {
        if (this.canPreview()) {
            this.element.vPlugin.preview(result, acceptsMimeTypes, e);
        }
    }

    canPreview() {
        return this.element.vPlugin && this.element.vPlugin.preview;
    }
}


