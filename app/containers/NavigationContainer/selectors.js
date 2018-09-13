import { createSelector } from 'reselect';
import selectLoginContainer from '../LoginContainer/selectors';

/**
 * Direct selector to the navigationContainer state domain
 */
const selectNavigationContainerDomain = () => state => state.get('navigationContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NavigationContainer
 */

const selectNavigationContainer = () => createSelector(
  selectNavigationContainerDomain(),
  selectLoginContainer(), // add to get access to LoginContainer
  // (substate) => substate.toJS()
  // adds all props on loginState to the NavigationContainer state
  (substate, loginSubstate) => Object.assign(substate.toJS(), loginSubstate) // combine the states
);

export default selectNavigationContainer;
export {
  selectNavigationContainerDomain,
};
