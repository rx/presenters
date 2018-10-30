import { detect } from 'detect-browser';
import config from '../config';

const incompatibleList = config.get('compatibility.incompatibleBrowsers', []);
const browser = detect();
const name = browser ? browser.name : 'unknown';
const isCompatible = browser && incompatibleList.indexOf(name) < 0;

export default isCompatible;
