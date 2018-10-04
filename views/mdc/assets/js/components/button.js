import {MDCRipple} from '@material/ripple';
import {VBaseComponent} from "./base-component";
import {hookupComponents} from "./base-component";

export function initButtons() {
    console.log('\tButtons');
    hookupComponents('.v-js-ripple-button', VBaseComponent, MDCRipple);
}
