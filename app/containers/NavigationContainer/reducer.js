/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_TOPICS_SUCCEEDED,
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
    default:
      return state;
  }
}

export default navigationContainerReducer;
