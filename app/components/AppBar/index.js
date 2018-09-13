/**
*
* AppBar
*
*/

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

import styles from './styles.css';

function AppBar({ toggleDrawer, email }) {
  const loginLink = email || (<Link to="/login">Log in</Link>);

  return (
    <div className={styles.appBar}>
      <div className={styles.iconButton} onClick={toggleDrawer}>
        <FontAwesomeIcon className={styles.icon} icon={faBars} />
      </div>
      <div className={styles.heading}>
        Coder Daily
      </div>
      <div className={styles.linkContainer}>
        {loginLink}
      </div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
  email: React.PropTypes.string,
};

export default AppBar;
