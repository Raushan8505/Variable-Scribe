import { applyMiddleware, combineReducers, createStore } from "redux";
import { cartReducer, productReducer } from "./Products/ProductRedux/productReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));