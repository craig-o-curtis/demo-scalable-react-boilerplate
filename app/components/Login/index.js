/**
*
* Login
*
*/

import React from 'react';

import TextInput from '../TextInput';

import validator from 'email-validator';

import styles from './styles.css';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  // es7 version of proptypes; es6 is App.PropTypes = {}
  static propTypes = {
    login: React.PropTypes.func.isRequired,
    cancelLogin: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      errorText: null,
    };

    this.login = this.login.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  // need othersyntax to get ref
  login = () => {
    const email = this.emailField.getValue();

    if (!validator.validate(email)) {
      this.setState({
        errorText: 'Please provide a valid email',
      });
      return;
    }

    this.setState({
      errorText: null,
    });
    // notice diff this.login vs. this.props.login
    this.props.login(email);
  }

  cancel() {
    this.props.cancelLogin();
  }

  render() {
    return (
      <div className={styles.login}>
        <div className={styles.heading}>
          Login with your email
        </div>

        <TextInput
          placeholder="Your email"
          ref={(f) => { this.emailField = f; }}
          errorText={this.state.errorText}
        />

        <div
          className={styles.actionContainer}
        >
          <button
            className={styles.button}
            onClick={this.cancel}
          >
            Cancel
          </button>
          <button
            className={styles.button}
            onClick={this.login}
          >
            Log in
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
