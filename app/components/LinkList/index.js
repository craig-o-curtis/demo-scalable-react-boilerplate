/**
*
* LinkList
*
*/

import React from 'react';

import Link from '../Link';
import IconButton from '../IconButton';

import styles from './styles.css';


function LinkList({ links, topicName, children, startAdd }) {
  const linkNodes = links.map(l => (
    <Link
      key={l.id}
      link={l}
    />
  ));
  return (
    <div className={styles.linkList}>
      <h1>{topicName}</h1>
      {linkNodes}

      <IconButton
        buttonClass={styles.iconButtonClass}
        iconClass={styles.iconButtonIconClass}
        icon="plus"
        handleClick={() => startAdd(topicName)}
      />

      {children}
    </div>
  );
}

// add proptype validation
LinkList.propTypes = {
  startAdd: React.PropTypes.func.isRequired,
  children: React.PropTypes.element,
  topicName: React.PropTypes.string.isRequired,
  links: React.PropTypes.arrayOf(React.PropTypes.shape(
    {
      description: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired,
      topicName: React.PropTypes.string.isRequired,
      id: React.PropTypes.string.isRequired,
    }
  )),
};

export default LinkList;
