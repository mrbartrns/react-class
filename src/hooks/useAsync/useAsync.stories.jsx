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
  const [state, cb] = useAsyncFn(async () => asyncReturnValue, []);
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
