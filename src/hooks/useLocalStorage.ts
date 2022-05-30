import { useCallback, useState } from 'react';

type ReturnTypes<T> = [T, (value: T) => void];

const useLocalStorage = <T>(key: string, initialValue: T): ReturnTypes<T> => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e: unknown) {
      // eslint-disable-next-line no-console
      console.error(e);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T) => {
      try {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e: unknown) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    },
    [key],
  );

  return [storedValue, setValue];
};

export default useLocalStorage;
