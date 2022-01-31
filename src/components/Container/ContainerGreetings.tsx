import styled from '@emotion/styled';
import facepaint from 'facepaint';
import lodash from 'lodash';
import { Typography } from '@components/Typography';
import { Box } from '@components/Box';
import { Button } from '@components/Button';
import { useTheme } from '@emotion/react';
import { showToast } from '@utils/showToast';
import { Baseline } from '@interface/index';

const breakPoints = [768, 1000, 1200];

const mediaQuery = facepaint(
  breakPoints.map((breakpoint) => `@media (min-width: ${breakpoint}px)`)
);

const StyledContainerGreetings = styled.div(
  mediaQuery({
    width: ['100%', '100%', '50%'],
    textAlign: ['center', 'left', 'left'],
  }),

  () => ({})
);

const StyledBox = styled.div(
  mediaQuery({
    height: [76, 'auto', 'auto'],
    display: 'flex',
    flexDirection: ['column', 'row', 'row'],
    justifyContent: 'space-between',
    alignItems: 'center',
  }),

  (props) => ({
    marginBottom: `${props.theme.baseline.b3}px`,
  })
);

export const ContainerGreetings = (): JSX.Element => {
  const { baseline }: Baseline = useTheme();

  const onHandleClick = () => {
    showToast('Form reseted', 'success');
  };

  return (
    <Box mb={`${baseline.b4}px`}>
      <StyledContainerGreetings>
        <Typography variant={'h1'}>Create a media plan</Typography>

        <StyledBox>
          <Typography variant={'body1'}>
            Fill in the form to calculate the budget
          </Typography>

          <Button
            variant={'outlined'}
            color={'#28abe2'}
            size={'large'}
            handleClick={lodash.throttle(onHandleClick, 3000)}
          >
            Reset Form
          </Button>
        </StyledBox>
      </StyledContainerGreetings>
    </Box>
  );
};
