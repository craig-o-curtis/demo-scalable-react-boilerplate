/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_LINKS_SUCCEEDED,
  REQUEST_LINKS_FAILED,
} from './constants';

const initialState = fromJS({
  links: [],
});

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LINKS_SUCCEEDED:
      // .set from IMMUTABLE.js
      return state.set('links', action.links);
    case REQUEST_LINKS_FAILED:
      // .set from IMMUTABLE.js
      return state.set('errorMessage', action.message);
    default:
      return state;
  }
}

export default linkListContainerReducer;
