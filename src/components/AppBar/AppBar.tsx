import styled from '@emotion/styled';
import { Property } from 'csstype';

type Props = {
  backgroundColor?: Property.BackgroundColor;
};

export const AppBar = styled.div<Props>(
  {
    height: 64,
  },

  (props) => ({
    backgroundColor: props.backgroundColor,
  })
);
