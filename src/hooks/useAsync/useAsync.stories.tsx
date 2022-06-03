import useAsyncFn from './useAsyncFn';

export default {
  title: 'Hooks/useAsyncFn',
};

const asyncReturnValue = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('success');
    }, 1000);
  });
};

export const Success = () => {
  // ANCHOR: () => asyncReturnValue가 아닌 asyncReturnValue를 넘겨주었더니 되었다.
  const [state, cb] = useAsyncFn(asyncReturnValue, [asyncReturnValue]);

  return (
    <div>
      <div>useAsync Text</div>
      <div>{JSON.stringify(state)}</div>
      <button type="button" onClick={cb} disabled={state.isLoading}>
        비동기 호출
      </button>
    </div>
  );
};
