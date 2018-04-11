// @flow

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { extractCritical } from 'emotion-server';
import Home from './Home';

type Props = {
  style?: string
};

const Html = ({ style }: Props) => (
  <html lang="en">
    <head>
      <title>Dawid van der Hoven - Coming Soon</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Dawid van der Hoven - Portfolio" />
      <link
        href="https://fonts.googleapis.com/css?family=Luckiest+Guy"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: style }} />
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
            'function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-57784776-1");'
        }}
      />
    </body>
  </html>
);

Html.defaultProps = {
  style: ''
};

export default function render(locals: {}, callback: (null, string) => mixed) {
  const { html, css } = extractCritical(renderToStaticMarkup(<Html />));
  const staticHtml = html.replace('<style></style>', `<style>${css}</style>`);
  callback(null, `<!DOCTYPE html>${staticHtml}`);
}
