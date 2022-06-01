import React from 'react';
import styled from '@emotion/styled';

interface BreadcrumbProps {
  children: React.ReactNode;
}

const BreadcrumbContainer = styled.div`
  display: inline-block;
`;

const Breadcrumb: React.FC<BreadcrumbProps> = ({ children, ...props }) => {
  // ANCHOR: 가장 마지막 요소의 아이콘이 나오지 않게 하기 위하여 children 처리
  const filtered = React.Children.toArray(children).filter((element) =>
    React.isValidElement(element),
  ) as React.ReactElement[];

  const items = filtered.map((element, index, elements) =>
    React.cloneElement(element, {
      ...element.props,
      active: index === elements.length - 1,
    }),
  );
  return <BreadcrumbContainer {...props}>{items}</BreadcrumbContainer>;
};

export default Breadcrumb;
