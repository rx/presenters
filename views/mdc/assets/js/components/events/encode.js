export function encode(value) {
    if (value === Object(value)) {
        return JSON.stringify(value);
    }
    else {
        return value;
    }
}
