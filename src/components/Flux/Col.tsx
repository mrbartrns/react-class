import styled from '@emotion/styled';
import React, { useMemo } from 'react';
import { useFlux } from '@contexts/FluxProvider';

interface ColProps {
  span: number;
  offset?: number;
  children: React.ReactNode;
  style?: { [key: string]: unknown };
}

const StyledCol = styled.div<ColProps>`
  max-width: 100%fit-content;
  width: ${({ span }) => `${(span / 12) * 100}%`};
  margin-left: ${({ offset = 0 }) => `${(offset / 12) * 100}%`};
  box-sizing: border-box;
`;

const Col: React.FC<ColProps> = ({
  span,
  offset = 0,
  children,
  style,
  ...props
}) => {
  const { gutter } = useFlux();
  const gutterStyle = useMemo(() => {
    if (Array.isArray(gutter)) {
      const horizontalGutter = gutter[0] as unknown as number;
      const verticalGutter = gutter[1] as unknown as number;
      return {
        paddingLeft: `${horizontalGutter / 2}px`,
        paddingRight: `${horizontalGutter / 2}px`,
        paddingTop: `${verticalGutter / 2}px`,
        paddingBottom: `${verticalGutter / 2}px`,
      };
    }
    return {
      paddingLeft: `${gutter / 2}px`,
      paddingRight: `${gutter / 2}px`,
    };
  }, [gutter]);
  return (
    <StyledCol
      {...props}
      span={span}
      offset={offset}
      style={{ ...style, ...gutterStyle }}
    >
      {children}
    </StyledCol>
  );
};

export default Col;
