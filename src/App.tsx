import React, { useState } from 'react';
import { Board } from '@components/Board';
import { Pagination } from '@components/Pagination';
import { IArticle } from '@/types/Article';

function App(): JSX.Element {
  const articles: IArticle[] = new Array(100).fill(0).map((_, idx) => ({
    id: idx,
    title: `${idx}번 게시물`,
    author: '1',
  }));
  const [page, setPage] = useState(0);
  const limit = 10;
  const offset = page * limit;
  return (
    <div className="App">
      <Pagination
        defaultPage={0}
        limit={10}
        total={articles.length}
        onChange={setPage}
      />
      <Board articles={articles.slice(offset, offset + limit)} />
    </div>
  );
}

export default App;
