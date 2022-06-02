import { useCallback, useState } from 'react';

type ReturnTypes<T> = [T, (value: T) => void];

// ANCHOR: localStorage와 sessionStorage api 사용법이 같으므로, 이름만 바꿔주면 된다.
const useLocalStorage = <T = unknown>(
  key: string,
  defaultValue: T,
): ReturnTypes<T> => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      return value ? (JSON.parse(value) as unknown as T) : defaultValue;
    } catch (e: unknown) {
      // eslint-disable-next-line no-console
      console.error(e);
      return defaultValue;
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
