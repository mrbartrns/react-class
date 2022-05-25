import { useState } from 'react';
/**
 * defaultPage: 처음 페이지
 * limit: 몇개 단위로 자를 건지
 * total: 총 아이템의 개수
 */
interface IPagination {
  defaultPage: number;
  limit: number;
  total: number;
  onChange: (page: number) => void;
}

export const Pagination = ({
  defaultPage = 0,
  limit,
  total,
  onChange,
}: IPagination): JSX.Element => {
  const [page, setPage] = useState(defaultPage);
  const totalPage = Math.ceil(total / limit);
  const handlePageChange = (page: number) => {
    onChange(page);
    setPage(page);
  };
  return (
    <ul>
      <li>
        <button onClick={() => page > 0 && handlePageChange(page - 1)}>
          이전
        </button>
      </li>
      {Array.from(new Array(totalPage), (_, idx) => idx).map((i) => {
        return (
          <li key={i}>
            <button
              style={{ backgroundColor: page === i ? 'red' : undefined }}
              onClick={() => handlePageChange(i)}
            >
              {i + 1}
            </button>
          </li>
        );
      })}
      <li>
        <button
          onClick={() => page + 1 !== totalPage && handlePageChange(page + 1)}
        >
          다음
        </button>
      </li>
    </ul>
  );
};
