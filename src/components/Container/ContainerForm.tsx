import React from 'react';
import styled from '@emotion/styled';
import facepaint from 'facepaint';
import { FormChannel } from '@components/Form/FormChannel';
import { FormGeneral } from '@components/Form/FormGeneral';
import { Button } from '@components/Button';
import { showToast } from '@utils/showToast';
import { Box } from '@components/Box';
import { useTheme } from '@emotion/react';
import { Baseline } from '@interface/index';
import lodash from 'lodash';

const breakPoints = [1000, 1200];

const mediaQuery = facepaint(
  breakPoints.map((breakpoint) => `@media (min-width: ${breakpoint}px)`)
);

const StyledContainerForm = styled.div(
  mediaQuery({ width: ['100%', '50%'] }),

  () => ({})
);

export const ContainerForm = () => {
  const [page, setPage] = React.useState(0);
  const { baseline }: Baseline = useTheme();

  const onHandlePage = (page: number) => {
    setPage(page);
  };

  const onHandleCopy = () => {
    showToast('Plan copied', 'success');
  };

  const onHandleSave = () => {
    showToast('Plan saved', 'success');
  };

  return (
    <StyledContainerForm>
      {!page && (
        <>
          <FormGeneral />
          <Box height={`${baseline.b8}px`} />
          <Button
            variant={'contained'}
            color={'#7bc67e'}
            size={'large'}
            fullWidth
            handleClick={() => onHandlePage(1)}
          >
            Step 2 of 2
          </Button>
        </>
      )}

      {!!page && (
        <>
          <FormChannel />
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            width={'100%'}
            mb={`${baseline.b2}px`}
          >
            <Button
              variant={'outlined'}
              color={'#28abe2'}
              size={'large'}
              width={`calc(50% - ${baseline.b2}px)`}
              handleClick={() => onHandlePage(0)}
            >
              Back
            </Button>

            <Button
              variant={'outlined'}
              color={'#28abe2'}
              size={'large'}
              width={`calc(50% - ${baseline.b2}px)`}
              handleClick={lodash.throttle(onHandleCopy, 3000)}
            >
              Copy plan
            </Button>
          </Box>

          <Button
            variant={'contained'}
            color={'#7bc67e'}
            size={'large'}
            fullWidth
            handleClick={lodash.throttle(onHandleSave, 3000)}
          >
            Save plan
          </Button>
        </>
      )}
    </StyledContainerForm>
  );
};
