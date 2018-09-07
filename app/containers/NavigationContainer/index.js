/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectNavigationContainer from './selectors';
import Navigation from '../../components/Navigation';
import { requestTopics, selectTopic, toggleDrawer } from './actions'; // import action creators

export class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  // create propType rules
  static propTypes = {
    requestTopics: React.PropTypes.func.isRequired,
    selectTopic: React.PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.requestTopics();
    /* ?? HOW ARE TOPICS CONNECTED ??*/
  }

  render() {
    return (
      <Navigation {...this.props} />
    );
  }
}

const mapStateToProps = selectNavigationContainer();


function mapDispatchToProps(dispatch) {
  return {
    // INTERNAL PROP - add imported requestTopics, attach to props, call on componentWillMount hook
    requestTopics: () => dispatch(requestTopics()),
    // DOWNWARD PROP - made available for inner Navigation component to use dispatch
      // this is passed down AGAIN through {...this.props} in <Navigation {...this.props} />
    selectTopic: (topic) => dispatch(selectTopic(topic)),
    // only emits action event, used in Navigation component
    toggleDrawer: () => dispatch(toggleDrawer()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
