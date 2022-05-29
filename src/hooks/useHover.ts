import React, { useCallback, useEffect, useRef, useState } from 'react';

type ReturnTypes<T> = [boolean, React.RefObject<T>];

const useHover = <T extends Element = Element>(): ReturnTypes<T> => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<T>(null);
  const onMouseEnter = useCallback(() => setIsHovered(() => true), []);
  const onMouseLeave = useCallback(() => setIsHovered(() => false), []);

  useEffect(() => {
    const { current } = ref;
    ref.current?.addEventListener('mouseenter', onMouseEnter);
    ref.current?.addEventListener('mouseleave', onMouseLeave);
    return () => {
      current?.removeEventListener('mouseenter', onMouseEnter);
      current?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [onMouseEnter, onMouseLeave, ref]);
  return [isHovered, ref];
};

export default useHover;
