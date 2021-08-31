import axios, { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  ADD_TODO,
  FETCH_TODOS,
  LOAD_TODOS,
  EDIT_TODO,
  CHECK_TODO,
  REMOVE_TODO,
} from "redux/actions/types";
import { fetchTodos } from "redux/actions/todo";

// WATCHERS
export function* todoWatchers() {
  // yield takeLatest(ADD_TODO, handleAddTodo);
  yield takeLatest(LOAD_TODOS, handleLoadTodos);
  //   yield takeLatest(EDIT_TODO, handleEditTodo);
  yield takeLatest(CHECK_TODO, handleCheckTodo);
  // yield takeLatest(REMOVE_TODO, handleRemoveTodo);
}

// REQUEST(API)
const BASE_URL =
  "https://e03f7880-1434-456b-9063-86037efc9105.mock.pstmn.io/todo";
const options = {
  headers: { "Content-Type": "application/json" },
};

export function requestFetchTodos(): Promise<AxiosResponse> {
  return axios.get(BASE_URL);
}

export function requsetCheckTodo() {
  return axios.post(`${BASE_URL}/1`, { isCheked: true }, options);
}

// HANDLER
export function* handleLoadTodos() {
  try {
    const response: AxiosResponse = yield call(requestFetchTodos);
    const { data } = response;
    yield put(fetchTodos(data.todoList));
  } catch (e) {
    console.error(e);
  }
}

export function* handleCheckTodo() {
  try {
    const response: AxiosResponse = yield call(requsetCheckTodo);
    alert(response.data.msg);
  } catch (e) {
    console.error(e);
  }
}

