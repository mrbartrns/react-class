import { useCallback, useState } from 'react';

const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [state, setState] = useState(initialValue);
  const toggle = useCallback(() => setState((prev) => !prev), []);
  return [state, toggle];
};

export default useToggle;
