/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_TOPICS_SUCCEEDED,
  SELECT_TOPIC,
} from './constants';

// add initial state data
const initialState = fromJS({
  topics: [],
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOPICS_SUCCEEDED:
      // .set from IMMUTABLE.js
      return state.set('topics', action.topics);
    case SELECT_TOPIC:
      return state.set('selectedTopic', action.topic);
    default:
      return state;
  }
}

export default navigationContainerReducer;
