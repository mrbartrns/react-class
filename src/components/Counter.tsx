import React, { useState } from 'react';

/**
 * 부모 컴포넌트에 메시지를 전달하기 위해서는
 * 부모 컴포넌트로부터 handler를 prop으로 전달 받아야 한다.
 */

interface ICounter {
  onIncrease: () => void;
  onDecrease: () => void;
}

export const Counter = ({ onIncrease, onDecrease }: ICounter): JSX.Element => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((prev) => prev + 1);
    if (onIncrease) onIncrease();
  };
  const decrease = () => {
    setCount((prev) => prev - 1);
    if (onDecrease) onDecrease();
  };
  return (
    <div>
      <span style={{ fontSize: 24 }}>{count}</span>
      <div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
};
