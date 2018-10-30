import { detect } from 'detect-browser';
import config from '../config';

const incompatibleList = config.get('compatibility.incompatibleBrowsers', []);
const browser = detect();
const name = browser ? browser.name : 'unknown';
const isCompatible = browser && incompatibleList.indexOf(name) < 0;

document.addEventListener('DOMContentLoaded', () => {
    if (!isCompatible) {
        const errorMessage = config.get(
            'compatibility.errorMessage',
            'Unsupported browser!',
        );
        document.body.innerHTML = `<p>${errorMessage}</p>`;
    }

    document.documentElement.classList.remove('incompatible-browser');
});

export default isCompatible;
