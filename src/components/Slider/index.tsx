import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange?: (newValue: number) => void;
}

const SliderContainer = styled.div`
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

const Handle = styled.div`
  position: absolute;
  top: 8px;
  left: 0;
  width: 12px;
  height: 12px;
  transform: translate(-50%, -50%);
  border: 2px solid #44b;
  border-radius: 50%;
  background-color: white;
  cursor: grab;
`;

const Track = styled.div`
  position: absolute;
  top: 6px;
  left: 0;
  width: 0;
  height: 4px;
  border-radius: 2px;
  background-color: #44b;
`;

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 0.1,
  defaultValue,
  onChange,
  ...props
}) => {
  const [dragging, setDragging] = useState(false);
  const [value, setValue] = useState(defaultValue || min);

  // ANCHOR: slider의 위치를 알기 위하여 sliderRef를 사용한다.
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback(() => setDragging(true), []);
  const handleMouseUp = useCallback(() => setDragging(false), []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging) return;
      if (!sliderRef.current) return;
      const handleOffset = e.pageX - sliderRef.current.offsetLeft;
      const sliderWidth = sliderRef.current.offsetWidth;
      const track = handleOffset / sliderWidth;
      let newValue;
      if (track < 0) {
        newValue = min;
      } else if (track > 1) {
        newValue = max;
      } else {
        newValue = Math.round((min + (max - min) * track) / step) * step;
        // ANCHOR: newValue가 max를 벗어나지 않도록 계산해야 한다.
        newValue = Math.min(max, Math.max(min, newValue));
      }
      setValue(newValue);

      if (onChange) onChange(newValue);
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, handleMouseDown, handleMouseUp, max, min, onChange, step]);

  // ANCHOR: 이벤트를 전역으로 잡은 이유는 사람들이 조심스럽게 슬라이더를 움직이지 않기 때문
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <SliderContainer ref={sliderRef} {...props}>
      <Rail />
      <Track style={{ width: `${percent}%` }} />
      <Handle onMouseDown={handleMouseDown} style={{ left: `${percent}%` }} />
    </SliderContainer>
  );
};

export default Slider;
