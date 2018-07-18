import axios from 'axios';
import config from '../config/dev.config.js';

export function selectAccessories(item) {
    console.log(item);
    const request = axios.get(`${config.backendServer}${config.testRoute}`);
    console.log('request:', request);
    return {
        type: 'SELECTED_ACCESSORIES',
        payload: request
    };
}