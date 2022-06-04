import { useCallback, useEffect, useRef } from 'react';

/**
 * ANCHOR: 내부적으로 run, clear로 구성되어 있다
 */
const useTimeoutFn = (cb: () => void, ms = 0): [() => void, () => void] => {
  const timeoutId = useRef<null | ReturnType<typeof setTimeout>>(null);
  // debounce에서 작동 X
  // TOAST에서 사용하려면 useRef로 callback 함수를 감싸줘야 함 이유는?
  const fn = useRef(cb);
  // callbackFn도 ref에 저장해야 하는 이유?
  const run = useCallback(() => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      fn.current();
    }, ms);
  }, [ms]);
  const clear = useCallback(() => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
  }, []);
  // hook이 사라질 때 clear를 해줘야 한다.
  useEffect(() => clear, [clear]);
  return [run, clear];
};

export default useTimeoutFn;
