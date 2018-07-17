export default function (state = null, action) {
    switch (action.type) {
        case 'FETCH_ALL_ITEMS':
            console.log(action.payload);
            return action.payload.data;
    };
    return state;
}