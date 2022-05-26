import { useMemo } from 'react';

interface IBox {
  label: string;
  n: number;
}

function sum(n: number) {
  console.log('Start');
  let result = 0;
  for (let i = 0; i <= n; i += 1) {
    result += i;
  }
  console.log('Finish');
  return result;
}

export const Box = ({ label, n }: IBox): JSX.Element => {
  // expensive 비용인 경우, 해당 의존성에 영향을 미치는 n의 변화가 없다면
  //재렌더링이 발생해도 다시 계산하지 않음
  const result = useMemo(() => sum(n), [n]); // 뒤 배열은 의존성
  return (
    <div>
      <div>
        {label}: {result}
      </div>
    </div>
  );
};
