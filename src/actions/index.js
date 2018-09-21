import config from '../config/dev.config.js';
import axios from 'axios';

export function fetchAllItems(category) {
    console.log('action-fetchALlItems', category);
    const request = axios.post(`${config.backendServer}${config.routes[category]}read`, 
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

export function saveNewItem (newItem) {
    const request = axios.post(`${config.backendServer}${config.routes['items']}add`, 
            newItem,
            {
                'Content-Type': 'application/json',
                'Authorization': 'JWT fefege...' 
            });
    return {
        type: 'SAVE_NEW_ITEM',
        payload: request
    };
}

export function deleteOneItem (item) {
    const request = axios.post(`${config.backendServer}${config.routes['items']}delete`,
            item,
            {
                'Content-Type': 'application/json',
                'Authorization': 'JWT fefege...' 
            });
    return {
        type: 'DELETE_ITEM',
        payload: request
    };
}

export function resetAuthToken () {
    const request = axios.post(`${config.backendServer}${config.authRoute}`,
            {},
            {
                'Content-Type': 'application/json',
                'Authorization': 'JWT fefege...' 
            });
    return {
        type: 'RESET_AUTH',
        payload: request
    };
}

export default {}