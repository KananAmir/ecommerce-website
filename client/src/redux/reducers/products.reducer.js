const initialState = {
    loading: false,
    data: undefined,
    error: undefined,
}

export const productsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_PRODUCTS_START':
            return {
                ...state,
                loading: true
            }
        case 'GET_PRODUCTS_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case 'GET_PRODUCTS_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}