import styled from '@emotion/styled';
import React from 'react';
/**
 * ANCHOR: 확장성을 위하여 wrapper로 감싸는 형태로 구성한다.
 */
interface InputStyleProps {
  inValid?: boolean;
}
interface WrapperStyleProps {
  block?: boolean;
}

interface InputProps extends InputStyleProps, WrapperStyleProps {
  label?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  wrapperProps?: { [key: string]: unknown };
  style?: { [key: string]: unknown };
}

const Wrapper = styled.div<WrapperStyleProps>`
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
`;

const StyledInput = styled.input<InputStyleProps>`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid ${({ inValid = false }) => (inValid ? 'red' : 'gray')};
  border-radius: 4px;
  box-sizing: border-box;
`;

const Label = styled.label`
  display: block;
  font-size: 12px;
`;

const Input: React.FC<InputProps> = ({
  label,
  block = false,
  inValid = false,
  required = false,
  disabled = false,
  readOnly = false,
  wrapperProps,
  style,
  ...props
}) => {
  return (
    <Wrapper block={block} {...wrapperProps}>
      <Label>{label}</Label>
      <StyledInput
        inValid={inValid}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        {...props}
      />
    </Wrapper>
  );
};

export default Input;
