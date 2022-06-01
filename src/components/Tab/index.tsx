import React, { useState, useMemo } from 'react';
import { TabItemProps } from '@components/Tab/TabItem';

interface TabProps {
  children: React.ReactNode;
  activeIndex?: number;
}

/**
 * ANCHOR: Tab 컴포넌트는 페이지 이동 없이 컨텐츠를 스위칭하기 위한 컴포넌트이다.
 * TODO: childrenToArray를 만들어서 재사용하도록 만들기
 * @param param0
 * @returns
 */
const Tab: React.FC<TabProps> = ({ children, activeIndex, ...props }) => {
  const [currentActive, setCurrentActive] = useState(() => {
    if (activeIndex) return activeIndex;
    const nodes = React.Children.toArray(children).filter((element) => {
      return (
        typeof element !== 'number' &&
        typeof element !== 'string' &&
        React.isValidElement<TabItemProps>(element)
      );
    }) as unknown as React.ReactElement<TabItemProps>[];
    const { index } = nodes[0].props;
    return index;
  });

  const items = useMemo(() => {
    const nodes = React.Children.toArray(children).filter((element) => {
      return React.isValidElement<TabItemProps>(element);
    }) as unknown as React.ReactElement[];
    return nodes.map((element) => {
      return React.cloneElement(element, {
        ...element.props,
        key: element.props.index,
        active: element.props.index === currentActive,
        onClick: () => {
          setCurrentActive(element.props.index);
        },
      });
    });
  }, [children, currentActive]);

  const activeItem = useMemo(
    () => items.find((element) => currentActive === element.props.index),
    [currentActive, items],
  );
  return (
    <div>
      <div>{items}</div>
      {/** 현재 선택한 아이템을 보여준다. */}
      <div>{activeItem?.props.children}</div>
    </div>
  );
};

export default Tab;
