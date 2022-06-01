import { useEffect, useRef } from 'react';

const useResize = <T extends Element = Element>(
  handler: (entry: ResizeObserverEntry) => void,
) => {
  const ref = useRef<T>(null);
  const savedHandler = useRef(handler);

  useEffect(() => {
    const { current } = ref;
    if (!current) return undefined;

    // resize를 감지하면 인자로 받은 콜백함수에 값을 넣어준다.
    const observer = new ResizeObserver(([entry]) => {
      savedHandler.current(entry);
    });

    // 감지 시작
    observer.observe(current);

    // component가 재호출 또는 destruct 되면 감지 해제
    return () => {
      observer.disconnect();
    };
  }, []);
  return ref;
};

export default useResize;
