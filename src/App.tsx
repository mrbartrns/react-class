import { useState, useCallback } from 'react';
import Box from '@components/Box';

function App(): JSX.Element {
  const [value, setValue] = useState(0);
  const plus = useCallback(() => setValue((prev) => prev + 1), []);
  return (
    <div className="App">
      <button onClick={plus}>+</button>
      <div>{value}</div>
      <Box />
    </div>
  );
}

export default App;
