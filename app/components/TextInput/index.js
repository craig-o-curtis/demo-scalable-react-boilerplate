/**
*
* TextInput
*
*/

import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';

class TextInput extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.getValue = this.getValue.bind(this);
  }

  /** used inside login component to get the value */
  getValue() {
    return this.field.value;
  }

  render() {
    const { errorText } = this.props; // gets the props.errorText and assigns to const errorText

    const fieldError = errorText ? (
      <div
        className={styles.errorMessage}
      >
        {errorText}
      </div>
    ) : null;

    return (
      <div className={styles.textInput}>
        <input
          className={classNames(styles.input, this.props.klass, { [styles.inputError]: errorText })}
          placeholder={this.props.placeholder}
          ref={(f) => { this.field = f; }}
          type="text"
        />

        {fieldError}
      </div>
    );
  }
}

TextInput.propTypes = {
  errorText: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  klass: React.PropTypes.string,
};

export default TextInput;
