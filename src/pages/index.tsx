/** @jsx jsx */

import { jsx, css } from "@emotion/core";

const anotherStyle = css({
  border: "5px solid blue;"
});
const style = css`
  border: 1px solid black;
`;

export default () => (
  <div css={style}>
    <h1 css={anotherStyle}>
      Welcome to React-Static!! <br /> + TypeScript
    </h1>
    <p>
      Learn{" "}
      <a href="https://github.com/sw-yx/react-typescript-cheatsheet">
        React + TypeScript
      </a>
    </p>
    <p>
      <a href="https://twitter.com/swyx">Report issues with this template</a>
    </p>
  </div>
);
