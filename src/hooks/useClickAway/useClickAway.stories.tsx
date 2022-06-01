import styled from '@emotion/styled';
import useClickAway from '@hooks/useClickAway';

export default {
  title: 'hooks/useClickAway',
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: royalblue;
  border: 1px solid black;
  color: white;
`;

const InnerBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #bada55;
  border: 1px solid black;
`;

export const Default = () => {
  const ref = useClickAway<HTMLDivElement>(() => {
    console.log('clicked away.');
  });
  return (
    <Box ref={ref}>
      <InnerBox>InnerBox</InnerBox>
    </Box>
  );
};
