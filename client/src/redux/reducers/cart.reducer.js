export const cartReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload]

        case 'REMOVE_FROM_CART':            
            return [...state.filter(product => product._id !== action.payload)]
        default:
            return state;
    }
}