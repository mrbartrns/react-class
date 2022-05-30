import React from 'react';
import { css } from '@emotion/react';
import TaskForm from '@components/TaskForm';
import TaskList from '@components/TaskList';
import Header from '@components/Header';
import styled from '@emotion/styled';
import TaskProvider from '@contexts/TaskProvider';

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const App = (): JSX.Element => (
  <div className="App">
    <TaskProvider>
      <Container>
        <Header>TODO</Header>
        <TaskForm />
        <TaskList
          css={css`
            margin-top: 1rem;
          `}
        />
      </Container>
    </TaskProvider>
  </div>
);

export default App;
