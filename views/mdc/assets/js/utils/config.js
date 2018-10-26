const PATH_SEPARATOR = '.';

/**
 * Retreive the nested value at `path`.
 * @param {Object} object The object to search
 * @param {string} path The period-delimited path to traverse
 * @return {Object} An object of the structure { ok: boolean, value: any }
 */
function dig(object, path) {
    const ret = {
        ok: false,
        value: undefined,
    };
    const keys = path.split(PATH_SEPARATOR);
    let k;
    let value = object;

    /* eslint-disable no-cond-assign */
    while (k = keys.shift()) {
        value = value[k];

        if (typeof value === 'undefined') {
            return ret;
        }
    }

    ret.ok = true;
    ret.value = value;

    return ret;
}

export default class VConfig {
    constructor(config = {}) {
        this.config = config;
    }

    /**
     * Retrieve the entire configuration object.
     * @return {Object}
     */
    all() {
        return this.config;
    }

    /**
     * Determine whether `key` is present.
     * @param {string} key [description]
     * @return {Boolean} [description]
     */
    has(key) {
        return dig(this.config, key).ok;
    }

    /**
     * Retrieve the nested value at `key`. If any keys during traversal do
     * not exist, `fallback` is returned.
     * @param {string} key The period-delimited path to traverse
     * @param {*} fallback
     * @return {*}
     */
    get(key, fallback) {
        if (!this.has(key)) {
            return fallback;
        }

        const keys = key.split(PATH_SEPARATOR);
        const last = keys.pop();
        const obj = dig(this.config, keys.join(PATH_SEPARATOR)).value;

        return obj[last];
    }
}
