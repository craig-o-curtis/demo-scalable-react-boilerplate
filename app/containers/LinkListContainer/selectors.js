import { createSelector } from 'reselect';
import selectNavigationContainer from '../NavigationContainer/selectors';

/**
 * Direct selector to the linkListContainer state domain
 */
const selectLinkListContainerDomain = () => state => state.get('linkListContainer');

/**
 * Other specific selectors
 */
// added
const selectRouteTopic = () => (state, props) =>
  props.params.topicName;

/**
 * Rabbit hole
 */
const selectTopic = () => createSelector(
  selectNavigationContainer(),
  selectRouteTopic(),
  (navigationState, routeTopicName) => {
    const selectedTopic = navigationState.topics.find(t => t.name === routeTopicName);

    return selectedTopic || {
      name: '',
    };
  }
);


/**
 * Default selector used by LinkListContainer
 */

const selectLinkListContainer = () => createSelector(
  selectLinkListContainerDomain(),
  // selectRouteTopic(), // added TWF REMOVED>...
  selectTopic(),
  // (substate, routeTopicName) => { // added wtf REMOVED...
  (substate, topic) => Object.assign(substate.toJS(), { topicName: topic.name })
    // return Object.assign(substate.toJS(), { routeTopicName }); // added WTF REMOVED...
);

export default selectLinkListContainer;
export {
  selectLinkListContainerDomain,
};
