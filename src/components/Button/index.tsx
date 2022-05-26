import styled from '@emotion/styled';

const Button = styled.button`
  display: block;
  width: 100%;
  height: 32px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 0.25rem;
  outline: none;
  box-sizing: border-box;
  padding: 0.5 0.35rem;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }

  &:active {
    background-color: #aaa;
  }
`;

export default Button;
