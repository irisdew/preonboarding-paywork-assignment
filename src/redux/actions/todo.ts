import {
  ADD_TODO,
  FETCH_TODOS,
  LOAD_TODOS,
  EDIT_TODO,
  CHECK_TODO,
  UNCHECK_TODO,
  REMOVE_TODO,
} from "./types";
import { todo, todos, newContent, newStatus } from "types";

export const addTodo = (todo: todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const fetchTodos = (todos: todos) => ({
  type: FETCH_TODOS,
  payload: todos,
});

export const loadTodos = () => ({
  type: LOAD_TODOS,
});

export const editTodo = (newContent: newContent) => ({
  type: EDIT_TODO,
  payload: newContent,
});

export const checkTodo = (newStatus: newStatus) => ({
  type: CHECK_TODO,
  payload: newStatus,
});

export const uncheckTodo = (id: string) => ({
  type: UNCHECK_TODO,
  payload: id,
});

export const removeTodo = (id: string) => ({
  type: REMOVE_TODO,
  payload: id,
});
