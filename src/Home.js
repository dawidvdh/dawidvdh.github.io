// @flow

import { css } from 'emotion'
import React from 'react';

const className = css({
	textDecoration: 'underline'
})

const Home = () => (
  <div className={className}>
		Some hotpink text.
	</div>
);

export default Home
