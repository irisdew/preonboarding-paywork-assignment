import { Reducer, AnyAction } from "redux";
import {
  ADD_TODO,
  FETCH_TODOS,
  LOAD_TODOS,
  EDIT_TODO,
  CHECK_TODO,
  REMOVE_TODO,
} from "redux/actions/types";
import { todos } from "types";

const initialState: todos = [];

const todoReducer: Reducer<todos, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case FETCH_TODOS:
      return [...action.payload];
    case LOAD_TODOS:
      return state;
    case EDIT_TODO:
      return state;
    case CHECK_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isCheck: action.payload.isCheck,
          };
        }
        return todo;
      });
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todoReducer;
