import VConfig from './utils/config';

const config = new VConfig({
    component: {
        datetime: {
            flatpickr: {
                altInput: true,
                clickOpens: false,
                disableMobile: true,
            },
        },
    },
    request: {
        headers: {
            POST: {
                Accept: 'application/json,text/html;q=0.9,*/*;q=0.8',
            },
        },
    },
});

export default config;
