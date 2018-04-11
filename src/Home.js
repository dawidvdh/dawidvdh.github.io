// @flow

import { css, injectGlobal } from 'emotion';
import React from 'react';

injectGlobal({
  '*': {
    boxSizing: 'border-box'
  },
  html: {
    height: '100%',
    position: 'relative',
    margin: '0',
    fontFamily: "'Luckiest Guy', cursive, sans-serif",
    fontSize: '14px'
  },
  body: {
    margin: '0',
    padding: '0',
    backgroundImage: `url(${require('../assets/images/oldBG.svg')})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#000000'
  }
});

const wrapper = css({
  background:
    'radial-gradient(ellipse at center, rgba(255, 255, 255, .4) 0, rgba(0, 0, 0, .9) 98%)',
  position: 'absolute',
  height: '100%',
  width: '100%',
  zIndex: '1',
  left: '0',
  top: '0',
  textAlign: 'center',
  '&:before': {
    content: `""`,
    display: 'inline-block',
    verticalAlign: 'middle',
    height: '100%',
    marginRight: '-.25em'
  }
});

const container = css({
  display: 'inline-block',
  verticalAlign: 'middle'
});

const face = css({
  width: '250px',
  minHeight: '313px',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${require('../assets/images/face.svg')})`
});

const comingSoon = css({
  textTransform: 'uppercase',
  fontSize: '4.2em',
  color: '#fff',
  lineHeight: '.9',
  marginTop: '.3em',
  marginBottom: 0,
  textShadow:
    '-1px -1px 0 #000, 4px -1px 0 #000, -1px 1px 0 #000, 6px 6px 0 #000'
});

const comingSoonText = css({
  fontSize: '1.4em',
  display: 'block'
});

const Home = () => (
  <div className={wrapper}>
    <div className={container}>
      <div className={face} />
      <h1 className={comingSoon}>
        Coming
        <span className={comingSoonText}>Soon</span>
      </h1>
    </div>
  </div>
);

export default Home;
