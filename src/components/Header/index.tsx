interface HeaderProps {
  children: string;
  lv: 1 | 2 | 3 | 4 | 5 | 6;
}

// Header 역시 Text처럼 style을 줄 수 있다.
const Header = ({ children, lv = 1 }: HeaderProps): JSX.Element => {
  const Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = `h${lv}`;
  return <Tag>{children}</Tag>;
};

export default Header;
