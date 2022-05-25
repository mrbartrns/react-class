import React, { useState } from 'react';
import { Board } from '@components/Board';
import { IArticle } from '@/types/Article';

function App(): JSX.Element {
  const [visible, setVisible] = useState(false);
  const articles: IArticle[] = [
    {
      id: 1,
      title: 'hello, world!',
      author: 'jjjj',
    },
    {
      id: 2,
      title: 'maple',
      author: 'kkkk',
    },
    {
      id: 3,
      title: 'youtube',
      author: 'llll',
    },
    {
      id: 4,
      title: 'twitch',
      author: 'mmmm',
    },
  ];

  return (
    <div className="App">
      <button
        onClick={() => {
          setVisible((prev) => !prev);
        }}
      >
        Toggle
      </button>
      {visible && (
        <h1>논리곱 연산자를 통해 JSX렌더링 여부를 쉽게 제어할 수 있다.</h1>
      )}
      {visible && <Board articles={articles} />}
    </div>
  );
}

export default App;
