export default function(state = null, action) {
    switch(action.type) {
        case 'RESET_AUTH': 
            return action.payload.data;
        default:
            return state;
    }
}