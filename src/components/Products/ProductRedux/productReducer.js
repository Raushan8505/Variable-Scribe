import { ADD, FETCH_TODOS_FAILURE, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESSS, REMOVE } from "./productActionType";

const intitialState = {
    loading: false,
    todos: [],
    error: "",
  }
  
  
  export function productReducer(state = intitialState, action) {
    switch (action.type) {
      case FETCH_TODOS_REQUEST:
        return { ...state, loading: true };
      case FETCH_TODOS_SUCCESSS:
        return { ...state, loading: false, todos: action.payload, error: "" };
      case FETCH_TODOS_FAILURE:
        return { ...state, loading: false, todos: [], error: action.payload }
      default:
        return state;
    }
  }
  
  export function cartReducer(state = [], action) {
    switch (action.type) {
      case ADD:
        const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
        if (existingItemIndex !== -1) {
  
          const updatedState = [...state];
          updatedState[existingItemIndex].quantity++;
          return updatedState;
        } else {
  
          return [...state, { ...action.payload, quantity: 1 }];
        }
      case REMOVE:
  
        const itemToRemove = state.find(item => item.id === action.payload);
        if (itemToRemove && itemToRemove.quantity > 1) {
  
          return state.map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          );
        } else {
  
          return state.filter(item => item.id !== action.payload);
        }
      default:
        return state;
    }
  }