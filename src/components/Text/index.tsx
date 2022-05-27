interface TextProps {
  children: React.ReactNode;
  mark?: boolean;
  code?: boolean;
  block?: boolean;
  paragraph?: boolean;
  strong?: boolean;
  size?: number;
  underline?: boolean;
  del?: boolean;
  color?: string;
  [extraProps: string]: any;
}

// 일반적으로 size에 숫자가 아닌 large, medium, small
// font-weight: regular, 400, 500, 600 등의 숫자를 이용하여 디자인 시스템을 구축한다.
// 또한, inline-style-tag보다는 .css를 이용하여 클래스를 사용한다.
export const Text = ({
  children,
  block = false,
  paragraph = false,
  strong = false,
  size = 16,
  underline = false,
  del = false,
  mark = false,
  code = false,
  color = 'black',
  ...props
}: TextProps): JSX.Element => {
  const Tag = block ? 'div' : paragraph ? 'p' : 'span';
  const fontStyle = {
    fontWeight: strong ? 'bold' : undefined,
    fontSize: size,
    textDecoration: underline ? 'underline' : undefined,
    color,
  };
  if (del) {
    children = <del>{children}</del>;
  } else if (mark) {
    children = <mark>{children}</mark>;
  } else if (code) {
    children = <code>{children}</code>;
  }
  return <Tag style={{ ...fontStyle, ...props.style }}>{children}</Tag>;
};
