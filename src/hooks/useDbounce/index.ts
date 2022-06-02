import useTimeoutFn from '@hooks/useTimeout/useTimeoutFn';
import { useEffect, useState } from 'react';

// ANCHOR: debounce 역시 useTimeoutFn을 사용
const useDebounce = <T>(value: T, ms = 0) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [run] = useTimeoutFn(() => setDebouncedValue(value), ms);
  useEffect(run, [run]);
  return debouncedValue;
};
export default useDebounce;
