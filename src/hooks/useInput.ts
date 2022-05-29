import React, { useCallback, useState } from 'react';

type ReturnTypes<T> = [
  T,
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
];

const useInput = <T>(initialValue: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValue(e.target.value as unknown as T),
    [],
  );
  return [value, handler];
};

export default useInput;
