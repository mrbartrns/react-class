import { useRef, useCallback, useEffect } from 'react';

// ANCHOR: mobile에선 touch start event 실행
const events = ['mousedown', 'touchstart'] as const;

const useClickAway = <T extends Element>(
  handler: (e?: MouseEvent | TouchEvent) => void,
) => {
  const ref = useRef<T>(null);
  const onClick = useCallback(
    (e: MouseEvent | TouchEvent) => {
      const { current } = ref;
      if (!current) return;
      // ANCHOR: 자식 컴포넌트를 클릭했을 경우 역시 생각해야 하므로 contains로 사용한다.
      if (!current.contains(e.target as unknown as Element)) handler(e);
    },
    [handler],
  );
  useEffect(() => {
    events.forEach((event) => document.addEventListener(event, onClick));
    return () =>
      events.forEach((event) => document.removeEventListener(event, onClick));
  }, [onClick]);
  return ref;
};

export default useClickAway;
