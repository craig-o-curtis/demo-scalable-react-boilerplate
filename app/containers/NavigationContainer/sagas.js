// import { take, call, put, select } from 'redux-saga/effects';
import { REQUEST_TOPICS } from './constants';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects'; // call to call a function, put to dispatch a redux action
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';

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

// All sagas to be loaded
export default [
  fetchTopicsSaga,
];
