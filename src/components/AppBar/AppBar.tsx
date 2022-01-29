import styled from '@emotion/styled';
import facepaint from 'facepaint';
import { Box } from '@components/Box';
import { Property } from 'csstype';
import { theme } from '@theme/index';
import { Icon } from '@components/Icon';

type Props = {
  backgroundColor?: Property.BackgroundColor;
};

const mediaQuery = facepaint(
  theme.breakPoints.map((breakpoint) => `@media (min-width: ${breakpoint}px)`)
);

const StyledAppBar = styled.div<Props>(
  mediaQuery({ height: [56, 56, 64, 64, 64] }),

  (props) => ({
    padding: `0 ${props.theme.baseline.b3}px`,
    backgroundColor: props.backgroundColor,
  })
);

export const AppBar = ({ backgroundColor }: Props) => {
  return (
    <StyledAppBar backgroundColor={backgroundColor}>
      <Box
        height={'100%'}
        width={'100%'}
        display={'flex'}
        alignItems={'center'}
      >
        <Icon type={'menuIcon'} />
      </Box>
    </StyledAppBar>
  );
};
