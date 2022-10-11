export const cartReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload]

        case 'REMOVE_FROM_CART':
            return [...state.filter(driver => driver.driverId !== action.payload)]

        default:
            return state;
    }
}