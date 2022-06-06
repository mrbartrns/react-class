import React from 'react';
import Paint from '@components/Paint';
import PenPlugin from '@components/Paint/plugins/pen';

const App = (): JSX.Element => (
  <div className="App">
    <Paint style={{ border: '1px solid black' }} plugins={[new PenPlugin()]} />
  </div>
);

export default App;
