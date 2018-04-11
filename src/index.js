// @flow

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { renderStylesToString } from 'emotion-server';
import Home from './Home';

const Html = () => (
  <html lang="en">
    <head>
      <title>Dawid van der Hoven - Coming Soon</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Dawid van der Hoven - Portfolio" />
      <link
        href="https://fonts.googleapis.com/css?family=Luckiest+Guy"
        rel="stylesheet"
      />
    </head>
    <body>
      <Home />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-57784776-1"
      />
      <script
        dangerouslySetInnerHTML={{
          __html:
            "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments)}gtag('js', new Date());gtag('config', 'UA-57784776-1');"
        }}
      />
    </body>
  </html>
);

export default function render(locals, callback) {
  const render = renderToStaticMarkup(<Html />);
  const withStyles = renderStylesToString(render);
  callback(null, `<!DOCTYPE html>${withStyles}`);
}
