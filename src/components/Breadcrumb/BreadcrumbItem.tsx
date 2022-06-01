import styled from '@emotion/styled';
import React from 'react';

interface BreadcrumbItemProps {
  children: React.ReactNode;
  href?: string;
  active?: boolean;
}

const StyledBreadcrumbItem = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  children,
  href,
  active = false,
  ...props
}) => {
  return (
    <StyledBreadcrumbItem {...props}>
      <a href={href}>
        <span style={{ fontWeight: active ? 'bold' : '' }}>{children}</span>
      </a>
      {/** icon 삽입 가능 */}
      {!active ? <span>{'>'}</span> : null}
    </StyledBreadcrumbItem>
  );
};

export default BreadcrumbItem;
