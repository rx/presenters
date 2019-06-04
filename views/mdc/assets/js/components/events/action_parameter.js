class VActionParameter {
    constructor(options) {
        this.value = options.value;
        this.response_index = options.response_index;
    }

    fetchValue(results) {
        const result = results[results.length - this.response_index - 1];
        return this.resolve(this.value, JSON.parse(result.content));
    }

    resolve(path, obj) {
        return this.value.reduce(function(prev, curr) {
            return prev ? prev[curr] : null;
        }, obj || self);
    }
}

function isObject(thing) {
    return thing && typeof thing === 'object';
}

/**
 * expandParam resolves an parameter `value` to a primitive value
 * according to the given path for the parameter in `results`.
 * If the `value` is not an action_parameter, it is returned unaltered.
 * @param {Object} results An action's results
 * @param {*} value The value of the parameter
 * @return {*} A resolved primitive value
 */
export function expandParam(results, value) {
    if (isObject(value) && value.type === 'action_parameter') {
        return new VActionParameter(value).fetchValue(results);
    }

    return value;
}

/**
 * expandParams resolves all values in `params` to primitive values.
 *
 * Primitive values are passed through unaltered.
 * Values of action_parameter parameters are resolved to primitive values
 * via `results`.
 * @param {Object} results An action's results
 * @param {Object} params An action's parameters
 * @return {Object}
 */
export function expandParams(results, params) {
    const expandedParams = {};

    for (const [key, value] of Object.entries(params)) {
        if (!isObject(value) || value.type === 'action_parameter') {
            expandedParams[key] = expandParam(results, value);
        }
        else {
            expandedParams[key] = expandParams(results, value);
        }
    }

    return expandedParams;
}
