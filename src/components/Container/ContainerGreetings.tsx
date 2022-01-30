import { Typography } from '@components/Typography';
import { Box } from '@components/Box';
import { Button } from '@components/Button';
import { useTheme } from '@emotion/react';
import { showToast } from '@utils/showToast';
import { Baseline } from '@interface/index';
import lodash from 'lodash';

export const ContainerGreetings = () => {
  const { baseline }: Baseline = useTheme();

  const onHandleClick = () => {
    showToast('Form cleared', 'success');
  };

  return (
    <>
      <Box mb={`${baseline.b1}px`}>
        <Typography variant={'h1'}>Create a media plan</Typography>
      </Box>

      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'50%'}
        mb={`${baseline.b3}px`}
      >
        <Typography variant={'body1'}>
          Fill in the form to calculate the budget
        </Typography>

        <Button
          variant={'outlined'}
          color={'#28abe2'}
          size={'large'}
          handleClick={lodash.throttle(onHandleClick, 3000)}
        >
          Clear Form
        </Button>
      </Box>
    </>
  );
};
