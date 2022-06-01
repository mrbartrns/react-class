import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import FluxProvider from '@contexts/FluxProvider';

interface RowStyleProps {
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-even';
  align?: 'center' | 'stretch' | 'flex-start' | 'flex-end';
}

interface RowProps {
  justify?: 'center' | 'start' | 'end' | 'between' | 'around' | 'even';
  align?: 'center' | 'stretch' | 'start' | 'end';
  gutter?: number | [number, number];
  children: React.ReactNode;
}

const cssAlias = {
  center: 'center',
  start: 'flex-start',
  stretch: 'stretch',
  around: 'space-around',
  between: 'space-between',
  even: 'space-even',
  end: 'flex-end',
} as const;

const StyledRow = styled.div<RowStyleProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const Row: React.FC<RowProps> = ({
  justify = 'start',
  align = 'stretch',
  children,
  gutter = 0,
  ...props
}) => {
  const gutterStyle = useMemo(() => {
    if (Array.isArray(gutter)) {
      const horizontalGutter = gutter[0] as unknown as number;
      const verticalGutter = gutter[1] as unknown as number;
      return {
        marginLeft: `-${horizontalGutter / 2}px`,
        marginRight: `-${horizontalGutter / 2}px`,
        marginTop: `-${verticalGutter / 2}px`,
        marginBottom: `-${verticalGutter / 2}px`,
      };
    }
    return {
      marginLeft: `-${gutter / 2}px`,
      marginRight: `-${gutter / 2}px`,
    };
  }, [gutter]);
  return (
    <FluxProvider gutter={gutter}>
      <StyledRow
        {...props}
        justify={cssAlias[justify]}
        align={cssAlias[align]}
        style={{ ...gutterStyle }}
      >
        {children}
      </StyledRow>
    </FluxProvider>
  );
};

export default Row;
