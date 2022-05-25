import { useState, useRef } from 'react';

export const AutoCounter = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const intervalId = useRef<ReturnType<typeof setInterval>>();
  const handleStart = () => {
    intervalId.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(intervalId.current);
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};
