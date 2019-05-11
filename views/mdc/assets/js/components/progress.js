import {hookupComponents, VBaseComponent} from './base-component';
import {MDCLinearProgress} from '@material/linear-progress';

export function initProgress(e) {
    console.log('\tProgress');
    hookupComponents(e, '.v-progress', VProgress, MDCLinearProgress);
}

export class VProgress extends VBaseComponent {
    constructor(element, mdcComponent) {
        super(element, mdcComponent);
        element.dataset.hidden === 'true' ? this.hide() : this.show();
        this.root.addEventListener('V:postStarted', (e) => {
            this.show();
        });
        this.root.addEventListener('V:postFinished', (e) => {
            this.hide();
        });
    }

    show() {
        this.mdcComponent.open();
    }

    hide() {
        this.mdcComponent.close();
    }
}
