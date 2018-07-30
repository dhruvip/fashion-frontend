import config from '../config/dev.config.js';
import axios from 'axios';

export function fetchAllItems(item) {
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

export function saveNewItem (newItem) {
    const request = axios.post(`${config.backendServer}${config.itemsRoute}add`, 
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
    const request = axios.post(`${config.backendServer}${config.itemsRoute}delete`,
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

export default {}