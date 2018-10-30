import { detect } from 'detect-browser';
import config from '../config';

const incompatibleList = config.get('incompatibleBrowsers', []);
const browser = detect();
const name = browser ? browser.name : 'unknown';
const isCompatible = browser && incompatibleList.indexOf(name) < 0;

document.addEventListener('DOMContentLoaded', () => {
    if (isCompatible) {
        document.documentElement.classList.remove('incompatible-browser');
    } else {
        document.body.innerHTML = `
            <div>
                <p>Your browser is not supported! Please use a different browser to continue.</p>
            </div>
        `;
    }
});

export default isCompatible;
