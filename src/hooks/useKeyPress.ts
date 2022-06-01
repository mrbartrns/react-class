import { useEffect, useState, useCallback } from 'react';

const useKeyPress = (pressedKey: string) => {
  const [isKeyPressed, setKeyPressed] = useState(false);
  const onKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (pressedKey !== e.key) return;
      setKeyPressed(true);
    },
    [pressedKey],
  );
  const onKeyup = useCallback(
    (e: KeyboardEvent) => {
      if (pressedKey !== e.key) return;
      setKeyPressed(true);
    },
    [pressedKey],
  );
  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    document.addEventListener('keyup', onKeyup);
    return () => {
      document.removeEventListener('keydown', onKeydown);
      document.removeEventListener('keyup', onKeyup);
    };
  }, [onKeydown, onKeyup]);
  return isKeyPressed;
};

export default useKeyPress;
