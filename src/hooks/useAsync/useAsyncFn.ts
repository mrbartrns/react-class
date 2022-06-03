import React, { useCallback, useState } from 'react';

interface AsyncData<T> {
  isLoading: boolean;
  data?: T;
  error?: Error;
}

type ReturnTypes<T> = [AsyncData<T>, (...args: unknown[]) => Promise<void>];

const useAsyncFn = <T = unknown>(
  fn: (...args: unknown[]) => Promise<T>,
  deps: React.DependencyList,
): ReturnTypes<T> => {
  // async data 처리
  const [state, setState] = useState<AsyncData<T>>({ isLoading: false });
  // callback 처리 후 loading 처리
  const callback = useCallback(async (...args: unknown[]) => {
    setState((prev) => ({ ...prev, isLoading: true }));
    return fn(...args)
      .then((data) => {
        console.log(data);
        setState((prev) => ({ ...prev, data }));
      })
      .catch((error: Error) => {
        setState((prev) => ({ ...prev, error }));
      })
      .finally(() => {
        setState((prev) => ({ ...prev, isLoading: false }));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [state, callback];
};

export default useAsyncFn;
