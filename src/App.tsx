import React, { useState } from 'react';
import { Counter } from '@components/Counter';

/**
 * 요구사항
 * 1. Counter 컴포넌트 구현하기
 * 2. 모든 Counter 컴포넌트의 합 구하기
 *
 * 무엇을 배울 것인가
 * 1. 컴포넌트에서 지역 상태를 관리하는 법
 * 2. 컴포넌트에서 이벤트 바인딩하기
 * 3. 부모 컴포넌트에서 메시지 전달하기
 */

function App(): JSX.Element {
  const [totalCount, setTotalCount] = useState(0);
  const increaseTotalCount = () => setTotalCount((prev) => prev + 1);
  const decreaseTotalCount = () => setTotalCount((prev) => prev - 1);
  return (
    <div className="App">
      <h1>{totalCount}</h1>
      <Counter
        onIncrease={increaseTotalCount}
        onDecrease={decreaseTotalCount}
      />
      <Counter
        onIncrease={increaseTotalCount}
        onDecrease={decreaseTotalCount}
      />
      <Counter
        onIncrease={increaseTotalCount}
        onDecrease={decreaseTotalCount}
      />
    </div>
  );
}

export default App;
