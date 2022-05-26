interface TextProps {
  children: string;
}
export const Text = ({ children }: TextProps): JSX.Element => {
  return <div>{children}</div>;
};
