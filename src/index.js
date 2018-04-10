// @flow

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const Html = () => (
  <html lang="en">
    <head>
      <title>Test</title>
    </head>
    <body>
      <div>more tests</div>
    </body>
  </html>
);

export default function render(locals, callback) {
  const render = renderToStaticMarkup(<Html />);
  callback(null, `<!DOCTYPE html>${render}`);
}
