/**
*
* IconButton
*
*/

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import styles from './styles.css';

function IconButton({ handleClick, icon, iconClass, buttonClass }) {
  // const iconType = faBars;

  return (
    <button
      className={classNames(styles.iconButton, buttonClass)}
      onClick={handleClick}
    >
      {/* <FontAwesomeIcon
        className={styles.icon}
        icon="plus"
      /> */}
      <FontAwesomeIcon
        className={classNames(styles.icon, iconClass)}
        icon={icon}
      />
    </button>
  );
}

IconButton.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
  icon: React.PropTypes.string.isRequired,
  iconClass: React.PropTypes.string,
  buttonClass: React.PropTypes.string,
};

export default IconButton;
