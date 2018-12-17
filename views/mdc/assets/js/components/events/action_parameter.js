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

export function expandParams(results, o) {
    Object.keys(o).forEach(function (k) {
        if (o[k] !== null && typeof o[k] === 'object' && o[k].type !== 'action_parameter') {
            expandParams(results, o[k]);
            return;
        }
        if (o[k].type && o[k].type === 'action_parameter') {
            o[k] = expandParam(results, o[k]);
        }
    });
}
