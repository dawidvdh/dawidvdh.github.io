/** @jsx jsx */

import { jsx, css } from "@emotion/core";

const anotherStyle = css({
  border: "5px solid blue;"
});

const style = css`
  border: 1px solid black;
`;

export default () => {
  return (
    <div css={style}>
      <h1 css={anotherStyle}>
        Welcome to React-Static!! <br /> + TypeScript
      </h1>
    </div>
  );
};
