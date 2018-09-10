// import { take, call, put, select } from 'redux-saga/effects';
import { REQUEST_TOPICS, SELECT_TOPIC } from './constants';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects'; // call to call a function, put to dispatch a redux action
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';
import { push } from 'react-router-redux';

// actual promise logic
export function fetchTopicsFromServer() {
  return fetch('http://localhost:3000/api/topics')
    .then(response => response.json());
}

// generator to allow for async
function* fetchTopics() {
  try {
    // yield used to pause a generator function for async waiting
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceeded(topics)); // dispatch action containing topics
  } catch (e) {
    yield put(requestTopicsFailed(e.message)); // dispatch action containing error message
  }
}

// generator to allow for async
// Individual exports for testing
export function* fetchTopicsSaga() {
  // wait until get REQUEST_TOPICS action, then do async generator call
  // yield* to delegate to another generator -- fetchTopics
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

// handle logic to change url
function* pushTopic(action) {
  // put means to fire an action/ dispatch an action
  yield put(push(`/topics/${action.topic.name}`));
}
export function* selectTopicSaga() {
  yield* takeLatest(SELECT_TOPIC, pushTopic);
}

// All sagas to be loaded
export default [
  fetchTopicsSaga,
  selectTopicSaga,
];
