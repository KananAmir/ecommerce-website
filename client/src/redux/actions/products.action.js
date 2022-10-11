import axios from "axios"

let baseUrl = ``;

export const getAllProductsAction = () => {
    return async (dispatch) => {
        dispatch({
            type: 'GET_PRODUCTS_START',
        })
        axios.get(`${baseUrl}`)
            .then(result =>
                dispatch({
                    type: 'GET_PRODUCTS_SUCCESS',
                    payload: result.data
                }))
            .catch(error => {
                dispatch({
                    type: 'GET_PRODUCTS_FAIL',
                    payload: error
                })
            })
    }
}
