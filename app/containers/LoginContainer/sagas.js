// import { take, call, put, select } from 'redux-saga/effects';
import { LOGIN, CANCEL_LOGIN } from './constants';
import { put } from 'redux-saga/effects'; // use to dispatch more actions to Redux
import { takeLatest } from 'redux-saga';
import { goBack } from 'react-router-redux';

// dispatch new action after hear LOGIN action AND CANCEL_LOGIN
function* handleDone() {
  // trigger route change from router
  yield put(goBack());
}

// Individual exports for testing
export function* doLoginSaga() {
  // wait around until get LOGIN action being fired
  yield* takeLatest(LOGIN, handleDone);
}

// new generator for canceling
export function* cancelSaga() {
  yield* takeLatest(CANCEL_LOGIN, handleDone);
}

// All sagas to be loaded
export default [
  doLoginSaga,
  cancelSaga,
];
