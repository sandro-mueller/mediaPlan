import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@components/Box';
import { Button } from '@components/Button';
import { State } from '@store/interface';
import { mediaPlanActions } from '@store/feature/mediaPlan';

export const FormGeneralCta = (): JSX.Element => {
  const dispatch = useDispatch();
  const { isTitle, isStartDate, isEndDate } = useSelector(
    (state: State) => state.mediaPlan
  );

  const onHandlePage = (page: number) => {
    dispatch(mediaPlanActions.handlePage(page));
  };

  return (
    <>
      <Box height={`${119}px`} />
      <Button
        variant={'contained'}
        color={'#7bc67e'}
        size={'large'}
        fullWidth
        disabled={!(isTitle && isStartDate && isEndDate)}
        handleClick={() => onHandlePage(1)}
      >
        {'button.continue'}
      </Button>
    </>
  );
};
