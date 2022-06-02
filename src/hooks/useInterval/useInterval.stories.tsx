import { useState } from 'react';
import useIntervalFn from './useIntervalFn';

export default {
  title: 'Hooks/useInterval',
};

export const Default = () => {
  const [state, setState] = useState(0);
  const [run, clear] = useIntervalFn(() => setState((prev) => prev + 1), 1000);
  const stop = () => {
    clear();
    setState(0);
  };
  return (
    <div>
      <div>{state}</div>
      <div>
        <button type="button" onClick={run}>
          시작
        </button>
        <button type="button" onClick={stop}>
          멈춤
        </button>
      </div>
    </div>
  );
};
