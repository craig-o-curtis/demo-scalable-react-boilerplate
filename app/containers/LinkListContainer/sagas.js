// import { take, call, put, select } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects'; // to execute functions with side-effects
import { takeLatest } from 'redux-saga'; // top subscribe
// import { SELECT_TOPIC } from '../NavigationContainer/constants';
import { requestLinksSucceeded, requestLinksFailed } from './actions';
import { REQUEST_LINKS, START_ADD } from './constants';
import { push } from 'react-router-redux';

// Promise function to call server
function fetchLinksFromServer(topicName) {
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`)
    .then(res => res.json()); // parse body of res into an object
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topicName); // fetchLinksFromServer(action.topic)
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
  // yield* takeLatest(SELECT_TOPIC, fetchLinks);
  yield* takeLatest(REQUEST_LINKS, fetchLinks);
}

/** START ADD SAGA */
function* startAdd(action) {
  // reroute to route when listens for START_ADD
  yield put(push(`topics/${action.topicName}/add`)); // put to dispatch actions
}

export function* startAddSaga() {
  yield* takeLatest(START_ADD, startAdd);
}

// All sagas to be loaded
export default [
  defaultSaga,
  startAddSaga,
];
