import axios, { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  ADD_TODO,
  LOAD_TODOS,
  EDIT_TODO,
  CHECK_TODO,
  REMOVE_TODO,
} from "redux/actions/types";
import { fetchTodos } from "redux/actions/todo";

// WATCHERS
export function* todoWatchers() {
  yield takeLatest(ADD_TODO, handleAddTodo);
  yield takeLatest(LOAD_TODOS, handleLoadTodos);
  yield takeLatest(CHECK_TODO, handleCheckTodo);
  yield takeLatest(REMOVE_TODO, handleRemoveTodo);
  yield takeLatest(EDIT_TODO, handleEditTodo);
}

// REQUEST(API)
const BASE_URL = "https://40cbe147-4414-480d-b2e3-9ad31e0d1eb2.mock.pstmn.io";
const options = {
  headers: { "Content-Type": "application/json" },
};

export function requestAddTodo(): Promise<AxiosResponse> {
  return axios.post(`${BASE_URL}/todo`, { content: "string" }, options);
}

export function requestFetchTodos(): Promise<AxiosResponse> {
  return axios.get(`${BASE_URL}/todo`);
}

export function requsetCheckTodo(): Promise<AxiosResponse> {
  return axios.post(`${BASE_URL}/todo/1`, { isCheked: true }, options);
}

export function requestRemoveTodo(): Promise<AxiosResponse> {
  return axios.post(`${BASE_URL}/todo/2`, {}, options);
}

export function requestEditTodo(): Promise<AxiosResponse> {
  return axios.post(`${BASE_URL}/todo/3`, { content: "string" }, options);
}

// HANDLER
export function* handleAddTodo() {
  try {
    const response: AxiosResponse = yield call(requestAddTodo);
    alert(response.data.msg);
  } catch (e) {
    console.error(e);
  }
}


export function* handleLoadTodos() {
  try {
    const response: AxiosResponse = yield call(requestFetchTodos);
    const { data } = response;
    yield put(fetchTodos(data.todoList));
  } catch (e) {
    console.error(e);
  }
}

export function* handleFetchTodos() {
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

export function* handleRemoveTodo() {
  try {
    const response: AxiosResponse = yield call(requestRemoveTodo);
    alert(response.data.msg);
  } catch (e) {
    console.error(e);
  }
}

export function* handleEditTodo() {
  try {
    const response: AxiosResponse = yield call(requestEditTodo);
    alert(response.data.msg);
  } catch (e) {
    console.error(e);
  }
}