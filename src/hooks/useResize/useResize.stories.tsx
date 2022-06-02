import React, { useState } from 'react';
import styled from '@emotion/styled';
import useResize from '@hooks/useResize';
import Image from '@components/Image';

export default {
  title: 'Hooks/useResize',
};

const Background = styled.div`
  width: 100%;
  height: 400px;
  background-color: blue;
`;

export const Default: React.FC = () => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const ref = useResize<HTMLDivElement>((entry) => {
    const { contentRect } = entry;
    setImageSize({ width: contentRect.width, height: contentRect.height });
  });
  return (
    <Background ref={ref}>
      <Image
        width={imageSize.width}
        height={imageSize.height}
        src="https://picsum.photos/1000"
        mode="contain"
        alt="img"
      />
    </Background>
  );
};
