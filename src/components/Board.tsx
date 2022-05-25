import { IArticle } from '@/types/Article';

interface IBoard {
  articles: IArticle[];
}

export const Board = ({ articles }: IBoard): JSX.Element => {
  return (
    <div className="board">
      <ul>
        {articles.map(({ id, title, author }) => {
          return (
            <li key={id}>
              {id} | {title} | {author}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
