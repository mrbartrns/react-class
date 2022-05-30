import styled from '@emotion/styled';
import React from 'react';

interface BadgeStyle {
  backgroundColor?: string;
  color?: string;
}

// 확장성 있는 컴포넌트를 위하여 background-color, color를 prop으로 받을 수 있다.
interface BadgeProps extends BadgeStyle {
  children: React.ReactNode;
  count?: number;
  maxCount?: number;
  dot?: boolean; // dot일 경우 숫자를 보여주지 않고 점만 보여주도록
  showZero?: boolean; // 0일 경우 보여질 방법 선택
}

const BadgeContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Super = styled.div`
  display: inline-flex;
  algin-items: center;
  position: absolute;
  top: 0;
  right: 0;
  height: 20px;
  padding: 0 8px;
  font-size: 12px;
  border-radius: 20px;
  color: white;
  background-color: #f44;
  transform: translate(50%, -50%);

  &.dot {
    padding: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
`;

const Badge: React.FC<BadgeProps> = ({
  children,
  count,
  maxCount,
  backgroundColor,
  color,
  dot,
  showZero,
  ...props
}) => {
  const colorStyle = { backgroundColor, color };
  let badge: null | React.ReactNode = null;
  if (count) {
    badge = (
      <Super style={colorStyle}>
        {maxCount && count > maxCount ? `${maxCount}+` : count}
      </Super>
    );
  } else if (count !== undefined) {
    badge = showZero ? <Super style={colorStyle}>0</Super> : null;
  } else if (dot) {
    badge = <Super className="dot" style={colorStyle} />;
  }

  return (
    <BadgeContainer {...props}>
      {children}
      {badge}
    </BadgeContainer>
  );
};

export default Badge;
