import { useCallback, useState } from 'react';

type ReturnTypes = [boolean, () => void];

const useToggle = (defaultValue = false): ReturnTypes => {
  const [toggle, setToggle] = useState(defaultValue);
  const onToggle = useCallback(() => setToggle((prev) => !prev), []);
  return [toggle, onToggle];
};

export default useToggle;
