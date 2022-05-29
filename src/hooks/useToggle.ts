import React, { useState, useCallback } from 'react';

type ReturnTypes = [boolean, () => void];

const useToggle = (initialValue: boolean = false): ReturnTypes => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback(() => setValue((prev) => !prev), []);
  return [value, handler];
};

export default useToggle;
