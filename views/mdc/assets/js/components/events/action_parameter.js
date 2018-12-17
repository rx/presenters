export class VActionParameter {
    constructor(options) {
        this.value = options.value;
        this.response_index = options.response_index;
    }

    fetchValue(results) {
        const result = results[results.length - this.response_index -1];
        return this.resolve(this.value, JSON.parse(result.content));
    }

    resolve(path, obj) {
        return this.value.reduce(function(prev, curr) {
            return prev ? prev[curr] : null;
        }, obj || self);
    }
}
