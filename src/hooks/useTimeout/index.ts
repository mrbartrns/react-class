import { useEffect } from 'react';
import useTimeoutFn from './useTimeoutFn';

const useTimeout = (cb: () => void, ms = 0) => {
  const [run, clear] = useTimeoutFn(cb, ms);
  useEffect(() => {
    run();
    return () => {
      clear();
    };
  }, [clear, run]);
  return clear;
};

export default useTimeout;
