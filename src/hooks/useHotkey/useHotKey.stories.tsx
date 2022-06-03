import React from 'react';
import useHotKey from '@/hooks/useHotkey';

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
