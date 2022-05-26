import { useState, useRef, useCallback, useEffect, RefObject } from 'react';
export const useHover = <T extends HTMLElement = HTMLElement>(): [
  boolean,
  RefObject<T>,
] => {
  const [state, setState] = useState(false);
  // 어떤 elelment를 가리킬지 필요하다.
  const ref = useRef<T>(null);
  const onMouseOver = useCallback(() => setState(true), []);
  const onMouseOut = useCallback(() => setState(false), []);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener('mouseover', onMouseOver);
      element.addEventListener('mouseout', onMouseOut);
    }
    return () => {
      if (element) {
        element.removeEventListener('mouseover', onMouseOver);
        element.addEventListener('mouseout', onMouseOut);
      }
    };
  });
  return [state, ref];
};
