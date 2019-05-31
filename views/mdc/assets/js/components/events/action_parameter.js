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

export function expandParam(results, value) {
    if (value.type && value.type === 'action_parameter') {
        return new VActionParameter(value).fetchValue(results);
    }
    else {
        return value;
    }
}

export function expandParams(results, params) {
    const expandedParams = {};

    for (const [key, value] of Object.entries(params)) {
        if (typeof value !== 'object') {
            continue;
        }

        if (value.type === 'action_parameter') {
            expandedParams[key] = expandParam(results, value);
        }
        else {
            expandedParams[key] = expandParams(results, value);
        }
    }

    return expandedParams;
}
