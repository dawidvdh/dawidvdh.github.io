import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import Home from './containers/Home/Home';
import NotFound from './containers/NotFound/NotFound';
import MarkdownIt from 'markdown-it';
import styles from './client.css';

ReactDOM.render(
  <div className={styles.test}>
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Home} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  </div>,
  document.getElementById('content')
);
