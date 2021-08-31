import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import { todos } from "types";

export interface rootState {
  todos: todos;
}

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
