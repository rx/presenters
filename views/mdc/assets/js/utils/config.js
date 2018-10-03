const PATH_SEPARATOR = '.';
const config = {
    request: {
        headers: {
            POST: {
                Accept: 'application/json,text/html;q=0.9,*/*;q=0.8',
            },
        },
    },
};

// object, string -> object
function getValueAt(base, path) {
    const keys = path.split(PATH_SEPARATOR);
    let k;
    let value = base;
    const ret = {
        ok: false,
        value: undefined,
    };

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
    static all() {
        return config;
    }

    static has(key) {
        return getValueAt(config, key).ok;
    }

    static get(key, fallback) {
        if (!VConfig.has(key)) {
            return fallback;
        }

        const keys = key.split(PATH_SEPARATOR);
        const last = keys.pop();
        const obj = getValueAt(config, keys.join(PATH_SEPARATOR)).value;

        return obj[last];
    }

    static set(key, value) {
        const keys = key.split(PATH_SEPARATOR);
        const last = keys.pop();
        const obj = getValueAt(config, keys.join(PATH_SEPARATOR)).value;

        obj[last] = value;
    }
}
