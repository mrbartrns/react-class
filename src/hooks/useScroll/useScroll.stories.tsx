import styled from '@emotion/styled';
import useScroll from '@hooks/useScroll';

export default {
  title: 'Hook/useScroll',
};

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  overflow: auto;
`;

const Inner = styled.div`
  width: 10000px;
  height: 10000px;
  background-image: linear-gradient(180deg, #000 0%, #fff 100%);
`;

export const Default = () => {
  const [coord, ref] = useScroll<HTMLDivElement>();
  const onClick = () =>
    ref.current?.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  return (
    <>
      <Box ref={ref}>
        <Inner />
      </Box>
      {coord.x}, {coord.y}
      <button type="button" onClick={onClick}>
        to top
      </button>
    </>
  );
};
