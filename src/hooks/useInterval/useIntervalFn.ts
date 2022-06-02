import { useCallback, useEffect, useRef } from 'react';

const useIntervalFn = (cb: () => void, ms = 0): [() => void, () => void] => {
  const intervalId = useRef<null | ReturnType<typeof setInterval>>(null);
  // ANCHOR: useRef로 callback 함수 최적화
  const fn = useRef(cb);
  const run = useCallback(() => {
    if (intervalId.current) clearInterval(intervalId.current);
    intervalId.current = setInterval(fn.current, ms);
  }, [ms]);
  const clear = useCallback(() => {
    if (intervalId.current) clearInterval(intervalId.current);
  }, []);
  useEffect(() => clear, [clear]);
  return [run, clear];
};

export default useIntervalFn;
