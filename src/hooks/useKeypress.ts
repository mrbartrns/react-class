import { useCallback, useEffect, useState } from 'react';

type ReturnType = boolean;

const useKeyPress = (targetKey: string): ReturnType => {
  const [keyPressed, setKeyPressed] = useState(false);
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (targetKey === e.key) {
        setKeyPressed(() => true);
      }
    },
    [targetKey],
  );
  const onKeyUp = useCallback(
    (e: KeyboardEvent) => {
      if (targetKey === e.key) {
        setKeyPressed(() => false);
      }
    },
    [targetKey],
  );
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);
  return keyPressed;
};

export default useKeyPress;
