import styled from '@emotion/styled';
import React from 'react';

interface TabItemWrapperStyleProps {
  active?: boolean;
}

export interface TabItemProps extends TabItemWrapperStyleProps {
  title: string;
  index: string;
  children: React.ReactNode;
}

const TabItemWrapper = styled.div<TabItemWrapperStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 60px;
  background-color: ${({ active }) => (active ? '#ddf' : '#eee')};
`;

const TabItem: React.FC<TabItemProps> = ({
  title,
  index,
  active,
  ...props
}) => {
  return (
    <TabItemWrapper active={active} {...props}>
      <span style={{ fontWeight: active ? 'bold' : '' }}>{title}</span>
    </TabItemWrapper>
  );
};

export default TabItem;
