import React from 'react';
/**
 * spacer는 하위 또는 요소컴포넌트를 조절하여 자동으로 간격이 생기게 하는 컴포넌트이다.
 *
 */
interface SpacerProps {
  children: React.ReactNode;
  type?: 'horizontal' | 'vertical';
  size?: number;
  [extraProps: string]: any;
}

const Spacer = ({
  children,
  type = 'horizontal',
  size = 8,
  ...props
}: SpacerProps): JSX.Element => {
  const spacerStyle = {
    ...props.style,
    display: type === 'vertical' ? 'block' : 'inline-block',
    verticalAlign: type === 'horizontal' ? 'middle' : undefined,
  };

  // TODO: replace any type
  const filterdNodes = React.Children.toArray(children).filter((element) =>
    React.isValidElement<any>(element),
  ) as React.ReactElement[];
  const nodes = filterdNodes.map((element, index, elements) => {
    return React.cloneElement(element, {
      ...element.props,
      style: {
        ...element.props.style,
        marginRight:
          type === 'horizontal' && index !== elements.length - 1
            ? size
            : undefined,
        marginBottom:
          type === 'vertical' && index !== elements.length - 1
            ? size
            : undefined,
      },
    });
  });

  return (
    <div {...props} style={spacerStyle}>
      {nodes}
    </div>
  );
};

export default Spacer;
