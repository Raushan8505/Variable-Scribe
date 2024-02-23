import axios from "axios";
import { FETCH_TODOS_FAILURE, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESSS } from "./productActionType";

const fetchTodosRequest = () =>
    ({type: FETCH_TODOS_REQUEST})

const fetchTodosSuccess = (todos) =>
    ({type: FETCH_TODOS_SUCCESSS, payload: todos})

const fetchTodosFailure = (error) =>
    ({type: FETCH_TODOS_FAILURE, payload: error})


export const getPost = () => async(dispatch) =>{
        dispatch(fetchTodosRequest());
    try {
        let res = await axios.get('http://localhost:8080/posts');
        //  console.log (res.data);

        dispatch(fetchTodosSuccess(res.data))
    } catch (error) {
        dispatch(fetchTodosFailure(error.message))
    }
}
