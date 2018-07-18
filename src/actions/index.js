import config from '../config/dev.config.js';
import axios from 'axios';

export default function fetchAllItems(item) {
    console.log('action-fetchALlItems', item);
    const request = axios.post(`${config.backendServer}${config.itemsRoute}read`, 
            {},
            {
                'Content-Type': 'application/json',
                'Authorization': 'JWT fefege...' 
            });
    console.log('request:', request);
    return {
        type: 'FETCH_ALL_ITEMS',
        payload: request
    };
}