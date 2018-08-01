export default function (state = null, action) {
    switch (action.type) {
        case 'SAVE_NEW_ITEM':
            console.log(action.payload);
            return 'saved successfully';
        default:
            return state;
    }
}