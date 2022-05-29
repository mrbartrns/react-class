import React, { useCallback, useEffect, useRef, useState } from 'react';

type ReturnTypes<T> = [boolean, React.RefObject<T>];

const useHover = <T extends Element = Element>(): ReturnTypes<T> => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<T>(null);
  const onMouseEnter = useCallback(() => setIsHovered(() => true), []);
  const onMouseLeave = useCallback(() => setIsHovered(() => false), []);
  useEffect(() => {
    ref.current?.addEventListener('mouseenter', onMouseEnter);
    ref.current?.addEventListener('mouseleave', onMouseLeave);
    return () => {
      ref.current?.removeEventListener('mouseenter', onMouseEnter);
      ref.current?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [ref]);
  return [isHovered, ref];
};

export default useHover;
