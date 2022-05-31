import styled from '@emotion/styled';
import React from 'react';

interface DividerProps {
  type?: 'horizontal' | 'vertical';
  size?: number;
  style?: { [key: string]: unknown };
}

const Line = styled.hr`
  border: none;
  background-color: #aaa;

  &.vertical {
    position: relative;
    top: -1;
    display: inline-block;
    width: 1px;
    height: 13px;
    vertical-align: middle;
  }

  &.horizontal {
    display: block;
    width: 100%;
    height: 1px;
  }
`;

const Divider: React.FC<DividerProps> = ({
  type = 'horizontal',
  size = 8,
  ...props
}) => {
  const dividerStyle = {
    margin: type === 'vertical' ? `0 ${size}px` : `${size}px 0`,
  };
  return (
    <Line
      className={type}
      style={{ ...dividerStyle, ...props.style }}
      {...props}
    />
  );
};

export default Divider;
