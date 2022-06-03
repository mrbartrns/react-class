import React from 'react';
import useHotKey from '.';

export default {
  title: 'Hooks/useHotKey',
};

export const Default = () => {
  const hotkeys = [
    {
      global: false,
      combo: 'esc',
      onKeyDown: () => {
        alert('esc');
      },
      onKeyUp: () => {},
    },
  ];
  const { handleKeyDown } = useHotKey(hotkeys);
  return (
    <div>
      <div>local test</div>
      <input onKeyDown={handleKeyDown} />
    </div>
  );
};
