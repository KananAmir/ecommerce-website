import { combineReducers } from "redux";
import { productsReducer } from "./products.reducer";
import { cartReducer } from "./cart.reducer";

export default combineReducers({
    productsReducer,
    cartReducer
})