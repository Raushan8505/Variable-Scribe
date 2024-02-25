import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { addProductReducer, cartReducer, editReducer, productReducer } from "./productReducer";

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    addProduct: addProductReducer,
    edit: editReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));