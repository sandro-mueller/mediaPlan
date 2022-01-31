import { Box } from '@components/Box';
import { Button } from '@components/Button';
import { useTheme } from '@emotion/react';
import { Baseline } from '@interface/index';
import { State } from '@store/interface';
import { mediaPlanActions } from '@store/module/mediaPlan';
import { useDispatch, useSelector } from 'react-redux';

export const FormGeneralCta = () => {
  const dispatch = useDispatch();
  const { baseline }: Baseline = useTheme();
  const { isTitle, isStartDate, isEndDate } = useSelector(
    (state: State) => state.mediaPlan
  );

  const onHandlePage = (page: number) => {
    dispatch(mediaPlanActions.handlePage(page));
  };

  return (
    <>
      <Box height={`${baseline.b8}px`} />
      <Button
        variant={'contained'}
        color={'#7bc67e'}
        size={'large'}
        fullWidth
        disabled={!(isTitle && isStartDate && isEndDate)}
        handleClick={() => onHandlePage(1)}
      >
        Step 2 of 2
      </Button>
    </>
  );
};
