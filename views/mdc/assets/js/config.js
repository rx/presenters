import VConfig from './utils/config';

export default new VConfig({
    component: {
        datetime: {
            flatpickr: {
                altInput: true,
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
