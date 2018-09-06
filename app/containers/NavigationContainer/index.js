/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectNavigationContainer from './selectors';
import Navigation from '../../components/Navigation';
import { requestTopics } from './actions'; // import action creators

export class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  // create propType rules
  static propTypes = {
    requestTopics: React.PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.requestTopics();
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
    // add imported requestTopics, attach to props
    requestTopics: () => dispatch(requestTopics()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
