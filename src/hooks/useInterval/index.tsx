import { useEffect } from 'react';
import useIntervalFn from './useIntervalFn';

const useInterval = (cb: () => void, ms = 0) => {
  const [run, clear] = useIntervalFn(cb, ms);
  useEffect(() => {
    run();
    return () => {
      clear();
    };
  }, [clear, run]);
  return clear;
};

export default useInterval;
