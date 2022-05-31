import React from 'react';
import styled from '@emotion/styled';

interface SliderProps {
  value?: number;
}

const ProgressContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Rail = styled.div`
  position: absolute;
  top: 6px;
  left: 0;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #aaa;
`;

// TODO: Track animation 적용하기
const Track = styled.div`
  position: absolute;
  top: 6px;
  left: 0;
  width: 0;
  height: 4px;
  border-radius: 2px;
  background-color: #44b;
  background-size: 20px 20px;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent 100%
  );

  animation: move 1000ms linear infinite;
  transition: width 100ms linear;
  @keyframes move {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 40px 0;
    }
  }
`;

const Progress: React.FC<SliderProps> = ({ value, ...props }) => {
  return (
    <ProgressContainer {...props}>
      <Rail />
      <Track style={{ width: `${value}%` }} />
    </ProgressContainer>
  );
};

export default Progress;
