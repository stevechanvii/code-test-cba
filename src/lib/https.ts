import axios from 'axios';

export const baseURL = 'https://gist.githubusercontent.com/medibank-digital';

const instance = axios.create({
    baseURL,
});

export const https = instance;
