// import { take, call, put, select } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects'; // to execute functions with side-effects
import { takeLatest } from 'redux-saga'; // top subscribe
import { SELECT_TOPIC } from '../NavigationContainer/constants';
import { requestLinksSucceeded, requestLinksFailed } from './actions';

// Promise function to call server
function fetchLinksFromServer(topic) {
  return fetch(`http://localhost:3000/api/topics/${topic.name}/links`)
    .then(res => res.json()); // parse body of res into an object
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topic); // fetchLinksFromServer(action.topic)
    yield put(requestLinksSucceeded(links));
    // dispatch action to store links
  } catch (e) {
    // dispatch action to store error
    yield put(requestLinksFailed(e.message));
  }
}

// Kicks off async calls
// function similar to traditional Redux switch statements, but more observable-like
// subscribes to actions emitted, calls cb on latest action
export function* defaultSaga() {
  yield* takeLatest(SELECT_TOPIC, fetchLinks);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
