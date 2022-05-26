import Box from '@components/Box';
import { useToggle } from '@hooks/useToggle';
import { useHover } from '@hooks/useHover';
import { useKeyPress } from '@hooks/useKeyPress';

function App(): JSX.Element {
  const [on, toggle] = useToggle();
  const [hover, ref] = useHover<HTMLDivElement>();

  return (
    <div className="App">
      <button onClick={toggle}>{on ? 'True' : 'False'}</button>
      <div>{hover ? 'hovered' : 'not hovered'}</div>
      <Box ref={ref} />
    </div>
  );
}

export default App;
