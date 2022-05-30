import React from 'react';
import { css } from '@emotion/react';
import TaskForm from '@components/TaskForm';
import TaskList from '@components/TaskList';

const App = (): JSX.Element => (
  <div className="App">
    <TaskForm />
    <TaskList
      css={css`
        margin-top: 1rem;
      `}
    />
  </div>
);

export default App;
