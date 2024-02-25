import axios from "axios";
import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT, EDIT_PRODUCT_FAILURE, EDIT_PRODUCT_REQUEST, EDIT_PRODUCT_SUCCESS, FETCH_TODOS_FAILURE, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESSS } from "./productActionTypes";

const fetchTodosRequest = () =>
    ({type: FETCH_TODOS_REQUEST})

const fetchTodosSuccess = (todos) =>
    ({type: FETCH_TODOS_SUCCESSS, payload: todos})

const fetchTodosFailure = (error) =>
    ({type: FETCH_TODOS_FAILURE, payload: error})


export const getPost = () => async(dispatch) =>{
        dispatch(fetchTodosRequest());
    try {
        let res = await axios.get('https://mock-api-glm6.onrender.com/posts');
        //  console.log (res.data);

        dispatch(fetchTodosSuccess(res.data))
    } catch (error) {
        dispatch(fetchTodosFailure(error.message))
    }
}

export const addProduct = (formData) => {
    return async (dispatch) => {
        dispatch({ type: ADD_PRODUCT_REQUEST });
        try {
            const response = await axios.post('https://mock-api-glm6.onrender.com/posts', formData);
            dispatch({ type: ADD_PRODUCT_SUCCESS, payload: response.data });
            console.log(response.data);
        } catch (error) {
            dispatch({ type: ADD_PRODUCT_FAILURE, payload: error.message });
        }
    };
};

export const editProduct = (id, updatedData) => {
    return async (dispatch) => {
        dispatch({ type: EDIT_PRODUCT_REQUEST });
        try {
            const response = await axios.put(`https://mock-api-glm6.onrender.com/posts/${id}`, updatedData);
            dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: EDIT_PRODUCT_FAILURE, payload: error.message });
        }
    };
};


export const deleteProduct = (productId) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_PRODUCT });
        try {
            // Make the DELETE request to your API endpoint
            await axios.delete(`https://mock-api-glm6.onrender.com/posts/${productId}`);
            dispatch({ type: DELETE_PRODUCT, payload: productId });
        } catch (error) {
            console.error(error);
        }
    };
};