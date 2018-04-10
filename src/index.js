// @flow

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { renderStylesToString } from 'emotion-server';
import Home from './Home'

const Html = () => (
  <html lang="en">
    <head>
      <title>Test</title>
    </head>
    <body>
      <Home />
    </body>
  </html>
);

export default function render(locals, callback) {
  const render = renderToStaticMarkup(<Html />);
  const withStyles = renderStylesToString(render);
  callback(null, `<!DOCTYPE html>${withStyles}`);
}
