import { useState } from 'react';
import useTimeout from '.';
import useTimeoutFn from './useTimeoutFn';

export default {
  title: 'Hooks/useTimeout',
};

export const Default = () => {
  // const [run, clear] = useTimeoutFn(() => alert('hello'), 3000);
  const clear = useTimeout(() => alert('hello'), 3000);
  return (
    <div>
      {/* <button type="button" onClick={run}>
        3초 뒤 실행
      </button> */}
      <button type="button" onClick={clear}>
        멈춤
      </button>
    </div>
  );
};
