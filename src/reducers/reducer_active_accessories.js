export default function(state = null, action) {
    switch(action.type) {
        case 'SELECTED_ACCESSORIES': 
            return action.payload.data;
        default:
            return state;
    }
}