import styled from '@emotion/styled';
import React from 'react';

interface WrapperStyleProps {
  block?: boolean;
}

interface StyledSelectStyleProps {
  invalid?: boolean;
}

interface SelectProps extends WrapperStyleProps, StyledSelectStyleProps {
  data: Array<string | { label: string; value: string }>;
  label: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  wrapperProps?: { [key: string]: unknown };
}

const Wrapper = styled.div<WrapperStyleProps>`
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
`;

const Label = styled.label`
  display: block;
  font-size: 12px;
`;

const StyledSelect = styled.select<StyledSelectStyleProps>`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid ${({ invalid }) => (invalid ? 'red' : 'gray')};
  border-radius: 4px;
  box-sizing: border-box;
`;

const Select: React.FC<SelectProps> = ({
  data,
  label,
  placeholder,
  block = false,
  invalid = false,
  required = false,
  disabled = false,
  wrapperProps,
  ...props
}) => {
  const formattedData = data.map((item) =>
    typeof item === 'string' ? { label: item, value: item } : item,
  );
  const options = formattedData.map((item) => (
    <option key={item.value} value={item.value}>
      {item.label}
    </option>
  ));

  if (placeholder) {
    options.unshift(
      <option key="__placeholder__" value="" hidden>
        {placeholder}
      </option>, // hideen: 아무 옵션 클릭 시 보이지 않게 된다.
    );
  }

  return (
    <Wrapper block={block} {...wrapperProps}>
      <Label>{label}</Label>
      <StyledSelect
        invalid={invalid}
        required={required}
        disabled={disabled}
        {...props}
      >
        {options}
      </StyledSelect>
    </Wrapper>
  );
};

export default Select;
