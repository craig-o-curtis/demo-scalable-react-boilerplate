/*
 *
 * NavigationContainer actions
 *
 */

import {
  REQUEST_TOPICS,
  REQUEST_TOPICS_SUCCEEDED,
  REQUEST_TOPICS_FAILED,
  SELECT_TOPIC,
  TOGGLE_DRAWER,
} from './constants';

// action creator for REQUEST_TOPICS
export function requestTopics() {
  return {
    type: REQUEST_TOPICS,
  };
}
// action creator for REQUEST_TOPICS_SUCCEEDED
export function requestTopicsSucceeded(topics) {
  return {
    type: REQUEST_TOPICS_SUCCEEDED,
    topics,
  };
}
// action creator for REQUEST_TOPICS_FAILED
export function requestTopicsFailed(message) {
  return {
    type: REQUEST_TOPICS_FAILED,
    message,
  };
}

// action creator for SELECT_TOPIC
export function selectTopic(topic) {
  return {
    type: SELECT_TOPIC,
    topic,
  };
}

// action creator for sidebar
  // no need to store boolean here, just dispatches action type
export function toggleDrawer() {
  return {
    type: TOGGLE_DRAWER,
  };
}
