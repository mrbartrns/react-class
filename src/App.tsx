import React, { ChangeEvent, useState, useEffect } from 'react';
import { css } from '@emotion/react';
import useHover from '@hooks/useHover';

function App(): JSX.Element {
  const [isHovered, ref] = useHover<HTMLDivElement>();

  return (
    <div className="App">
      <div>useToggle test</div>
      <div>{isHovered ? 'hovered!' : 'not hovered'}</div>
      <div
        ref={ref}
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100px;
          height: 100px;
          border: 1px solid;
          background-color: royalblue;
          color: white;
          text-align: center;
          box-sizing: border-box;
        `}
      >
        HoverBox
      </div>
    </div>
  );
}

export default App;
