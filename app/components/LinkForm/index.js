/**
*
* LinkForm
*
*/

import React from 'react';

import TextInput from '../TextInput';

import styles from './styles.css';

class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.linkForm}>
          <div className={styles.heading}>
            Add a link:
          </div>

          <TextInput
            placeholder="URL"
            klass={styles.input}
          />

          <TextInput
            placeholder="Description"
            klass={styles.input}
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
      </div>
    );
  }
}

export default LinkForm;
