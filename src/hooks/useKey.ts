import { useCallback, useEffect } from 'react';

const useKey = (
  targetKey: string,
  handler: (...data: unknown[]) => void,
  event: 'keyup' | 'keypress' | 'keydown' = 'keydown',
) => {
  const handleKey = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === targetKey) {
        handler();
      }
    },
    [handler, targetKey],
  );

  useEffect(() => {
    window.addEventListener(event, handleKey);
    return () => window.removeEventListener(event, handleKey);
  }, [event, handleKey]);
};

export default useKey;
