/*
 *
 * NavigationContainer actions
 *
 */

import {
  REQUEST_TOPICS,
  REQUEST_TOPICS_SUCCEEDED,
  REQUEST_TOPICS_FAILED,
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
