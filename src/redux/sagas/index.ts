import { fork } from "redux-saga/effects";
import { todoWatchers } from "redux/sagas/todo";

function* rootSaga() {
  yield fork(todoWatchers);
}

export default rootSaga;
