import {VErrors} from './errors';
export class VBase {
    clearErrors() {
        new VErrors().clearErrors();
    }
}
