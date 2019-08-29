export const dirtyableMixin = Base => class extends Base {
    get originalValue() {
        return this._originalValue;
    }

    set originalValue(value) {
        this._originalValue = value;
    }

    get dirtyable() {
        if (!this.element) {
            return false;
        }

        return this.element.hasAttribute('data-dirtyable');
    }

    isDirty() {
        // Implement in extending classes.
        throw new Error('Implement isDirty()');
    }
};
