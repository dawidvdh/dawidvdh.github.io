import React from 'react';
import ReactDOM from 'react-dom';
import styles from './client.css';

ReactDOM.render(
  <div className={styles.test}>
    <p>tester</p>
  </div>,
  document.getElementById('content')
);
