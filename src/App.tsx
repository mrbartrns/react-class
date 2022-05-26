import React, { useState, useCallback } from 'react';
import Checkbox from '@components/Checkbox';

function App(): JSX.Element {
  const [foodOn, setFoodOn] = useState(false);
  const [servicesOn, setServicesOn] = useState(false);
  const [transportationOn, setTransportationOn] = useState(false);
  const foodChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setFoodOn(e.target.checked),
    [],
  );
  const servicesChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setServicesOn(e.target.checked),
    [],
  );
  const transportationChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setTransportationOn(e.target.checked),
    [],
  );
  return (
    <div className="App">
      <Checkbox label="food" on={foodOn} onChange={foodChange} />
      <Checkbox label="services" on={servicesOn} onChange={servicesChange} />
      <Checkbox
        label="transportation"
        on={transportationOn}
        onChange={transportationChange}
      />
    </div>
  );
}

export default App;
