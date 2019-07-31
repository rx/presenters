import {uninitMenus} from './menus';

export function uninitialize(root) {
    console.debug('Uninitializing components');

    uninitMenus(root);
}
