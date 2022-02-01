import React from 'react';
import styled from '@emotion/styled';

const StyledWrapper = styled.div((props) => ({
  maxWidth: props.theme.breakPoints[props.theme.breakPoints.length - 1],
  padding: `${props.theme.baseline.b4}px`,
  paddingTop: props.theme.baseline.b8,
  margin: '0 auto',
}));

export const Wrapper: React.FC<{ children: any }> = ({
  children,
}): JSX.Element => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
