import React, { useRef, useEffect, useCallback } from 'react';

const useIntersect = <T extends Element = Element>(
  lazy: boolean,
  onIntersect: (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver,
  ) => void,
  threshold = 0,
): React.RefObject<T> => {
  const ref = useRef<T>(null);
  const checkIntersect: IntersectionObserverCallback = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        onIntersect(entry, observer);
      }
    },
    [onIntersect],
  );

  useEffect(() => {
    if (!lazy) return undefined;
    let observer: null | IntersectionObserver = null;
    if (ref.current) {
      observer = new IntersectionObserver(checkIntersect, { threshold });
      observer.observe(ref.current);
    }
    return () => observer?.disconnect();
  }, [checkIntersect, lazy, threshold]);

  return ref;
};

export default useIntersect;
