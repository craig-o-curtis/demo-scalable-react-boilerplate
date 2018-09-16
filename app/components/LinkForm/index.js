/**
*
* LinkForm
*
*/

import React from 'react';

import TextInput from '../TextInput';

import styles from './styles.css';

class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    addLink: React.PropTypes.func.isRequired,
    topicName: React.PropTypes.string.isRequired,
    addLinkCancelled: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      urlError: '',
      descriptionError: '',
    };

    this.onCancel = this.onCancel.bind(this);
  }

  onAdd = () => {
    const url = this.url.getValue();
    const description = this.description.getValue();
    let urlError = null;
    let descriptionError = null;

    if (!url.match(/[-A-z0-9:%._/+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)) {
      urlError = 'Please provide a valid URL';
    }

    if (!description) {
      descriptionError = 'Please provide a valid description';
    }

    this.setState({
      urlError,
      descriptionError,
    });

    if (urlError || descriptionError) {
      return;
    }

    // mapped dispatch to props function that calls action creator
    this.props.addLink({
      url,
      description,
      topicName: this.props.topicName,
    });
  };

  onCancel() {
    this.props.addLinkCancelled();
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
            errorText={this.state.urlError}
            ref={(f) => { this.url = f; }}
          />

          <TextInput
            placeholder="Description"
            klass={styles.input}
            errorText={this.state.descriptionError}
            ref={(f) => { this.description = f; }}
          />

          <div
            className={styles.actionContainer}
          >
            <button
              className={styles.button}
              onClick={this.onCancel}
            >
              Cancel
            </button>
            <button
              className={styles.button}
              onClick={this.onAdd}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkForm;
