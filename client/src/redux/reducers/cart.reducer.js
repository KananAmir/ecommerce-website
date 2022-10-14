export const cartReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            localStorage.setItem('cart', JSON.stringify([...state, action.payload]));
            return [...state, action.payload]

        case 'REMOVE_FROM_CART':
            let cartState = JSON.parse(localStorage.getItem('cart'));
            const result = [...cartState.filter(product => product._id !== action.payload)]
            localStorage.setItem('cart', JSON.stringify(result));
            return result
        default:
            return state;
    }
}