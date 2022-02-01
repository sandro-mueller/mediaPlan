import lodash from 'lodash';
import { useDispatch } from 'react-redux';
import { useTheme } from '@emotion/react';
import { Box } from '@components/Box';
import { Button } from '@components/Button';
import { Baseline } from '@interface/index';
import { showToast } from '@utils/showToast';
import { mediaPlanActions } from '@store/module/mediaPlan';

export const FormChannelCta = () => {
  const dispatch = useDispatch();
  const { baseline }: Baseline = useTheme();

  const onHandlePage = (page: number) => {
    dispatch(mediaPlanActions.handlePage(page));
  };

  const onHandleCopy = () => {
    showToast('Plan copied', 'success');
  };

  const onHandleSave = () => {
    showToast('Plan saved', 'success');
  };

  return (
    <>
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
  );
};
