import { useState, useCallback, useEffect, useRef, RefObject } from 'react';

type ReturnTypes<T> = [boolean, RefObject<T>];

const useHover = <T extends Element>(): ReturnTypes<T> => {
  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);
  const onMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);
  const ref = useRef<T>(null);
  useEffect(() => {
    const { current } = ref;
    current?.addEventListener('mouseenter', onMouseEnter);
    current?.addEventListener('mouseleave', onMouseLeave);
    return () => {
      current?.removeEventListener('mouseenter', onMouseEnter);
      current?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [onMouseEnter, onMouseLeave, ref]);
  return [isHovered, ref];
};

export default useHover;
