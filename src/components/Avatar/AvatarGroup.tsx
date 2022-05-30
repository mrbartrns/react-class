import React from 'react';

interface AvatarGroupProps {
  children: React.ReactNode;
  shape?: 'circle' | 'round' | 'square';
  size?: number;
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  shape = 'circle',
  size = 70,
  ...props
}) => {
  // ANCHOR: children중에서 ReactNode인 children만 필터링
  // ANCHOR: 필터링한 children을 강제로 주입
  const avatars = React.Children.toArray(children).filter((element) =>
    React.isValidElement(element),
  ) as unknown as React.ReactElement[];
  const avatarsWithProps = avatars.map((element, index, elements) => {
    return React.cloneElement(element, {
      ...element.props,
      size,
      shape,
      style: {
        ...element.props.style,
        marginLeft: -size / 5,
        zIndex: elements.length - index,
      },
    });
  });
  return (
    <div style={{ paddingLeft: size / 5 }} {...props}>
      {avatarsWithProps}
    </div>
  );
};

export default AvatarGroup;
