import VConfig from './utils/config';

export default new VConfig({
    component: {
        datetime: {
            flatpickr: {
                static: true,
                altInput: true,
                disableMobile: true,
                clickOpens: false,
                defaultHour: 0
            },
        },
    },
    request: {
        headers: {
            POST: {
                Accept: 'application/json,text/html;q=0.9',
            },
        },
    },
    compatibility: {
        errorMessage: 'Your browser is not supported! Please use a different browser to continue.',
        incompatibleBrowsers: [
            'ie',
        ],
    },
});
