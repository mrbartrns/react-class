import React, { useRef } from 'react';
import { Input } from '@components/Input';
import { AutoCounter } from '@components/AutoCounter';

function App(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  // inputRef가 possibly null일 수 있으므로, type gurad를 통해 타입을 체크해야 한다.
  const onClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="App">
      <Input ref={inputRef} />
      <button onClick={onClick}>Click!</button>
      <AutoCounter />
    </div>
  );
}

export default App;
