export class VLoadsPage {
    constructor(url) {
        this.url = url;
    }

    call() {
        location.assign(this.url);
    }
}
