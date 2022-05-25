import React from 'react';
import { IArticle } from '@/types/Article';

interface IBoard {
  articles?: IArticle[];
}

export const Board = ({ articles = [] }: IBoard): JSX.Element => {
  return (
    <div>
      <h1>Board</h1>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.id}>
              {article.id} | {article.title} | {article.author}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
