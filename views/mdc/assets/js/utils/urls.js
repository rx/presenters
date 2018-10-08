export class VUrls {

    paramsArrayToHash(params) {
        var results = {};
        // Map params to object/hash
        for (let param of params) {
            results[param[0]] = param[1];
        }
        return results;
    }

    buildURL(baseUrl) {
        var url = baseUrl;
        for (var i = 1; i < arguments.length; i++) {
            var args = arguments[i];
            if (Array.isArray(args)) {
                for (let arg of args) {
                    url += this.seperator(url) + this.encodeQueryParam(arg[0], arg[1]);
                }
            } else if (typeof args === 'object') {
                let q = this.serialize(arguments[i]);
                if(q && q.length>0){
                    url += this.seperator(url) + q;
                }
            } else if(args && args.length > 0){
                url += this.seperator(url) + args;
            }
        }
        return url;
    }

    seperator(url) {
        if (url.endsWith('?')) {
            return '';
        }
        return url.includes("?") ? '&' : '?';
    }

    serialize(obj, prefix) {
        var str = [],
            p;
        for (p in obj) {
            if (obj.hasOwnProperty(p)) {
                var k = prefix ? prefix + "[" + p + "]" : p,
                    v = obj[p];
                str.push((v !== null && typeof v === "object") ?
                    this.serialize(v, k) :
                    this.encodeQueryParam(k, v));
            }
        }
        return str.join("&");
    }

    encodeQueryParam(k, v) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(v);
    }
}
