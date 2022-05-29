import React, { useRef, useEffect, useCallback } from 'react';

const useIntersect = <T extends Element = Element>(
  onIntersect: (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver,
  ) => void,
  threshold: number = 0,
): React.RefObject<T> => {
  const ref = useRef<T>(null);
  const checkIntersect: IntersectionObserverCallback = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        onIntersect(entry, observer);
      }
    },
    [],
  );

  useEffect(() => {
    let observer: null | IntersectionObserver = null;
    if (ref.current) {
      observer = new IntersectionObserver(checkIntersect, { threshold });
      observer.observe(ref.current);
    }
    return () => observer?.disconnect();
  }, [ref.current]);

  return ref;
};

export default useIntersect;
