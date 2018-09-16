import { createSelector } from 'reselect';

/**
 * Direct selector to the linkFormContainer state domain
 */
const selectLinkFormContainerDomain = () => state => state.get('linkFormContainer');

/**
 * Other specific selectors
 */
// grab topicName, which came through on root of this compoent - LinkListContainer
const selectRootTopic = () => (state, props) => props.params.topicName;


/**
 * Default selector used by LinkFormContainer
 */

const selectLinkFormContainer = () => createSelector(
  selectLinkFormContainerDomain(),
  selectRootTopic(),
  (substate, topicName) => Object.assign(substate.toJS(), { topicName })
);

export default selectLinkFormContainer;
export {
  selectLinkFormContainerDomain,
};
