export const addToCartAction = (product) => {
    return {
        type: 'ADD_TO_FAVORITES',
        payload: product
    }
}

export const removeCartAction = (id) => {
    return {
        type: 'REMOVE_DRIVER',
        payload: id
    }
}