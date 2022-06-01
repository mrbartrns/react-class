import React, { useEffect, useCallback, useRef } from 'react';
import useRafState from '@hooks/useRafState';

type ReturnTypes<T> = [{ x: number; y: number }, React.RefObject<T>];

const useScroll = <T extends Element>(): ReturnTypes<T> => {
  const [state, setRafState] = useRafState({ x: 0, y: 0 });
  const ref = useRef<T>(null);
  const onScroll = useCallback(() => {
    const { current } = ref;
    if (!current) return;
    setRafState({ x: current.scrollTop, y: current.scrollLeft });
  }, [setRafState]);
  useEffect(() => {
    const { current } = ref;
    if (!current) return undefined;
    current.addEventListener('scroll', onScroll);
    return () => current.removeEventListener('scroll', onScroll);
  }, [onScroll, ref]);
  return [state, ref];
};

export default useScroll;
