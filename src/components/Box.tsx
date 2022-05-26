import React from 'react';
import { css } from '@emotion/react';

const Box = (): JSX.Element => {
  console.log('Render Box');
  const style = css`
    width: 100px;
    height: 100px;
    border: 1px solid;
    background-color: hotpink;
  `;
  return <div css={style}></div>;
};

export default React.memo(Box);
