import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@components/Box';
import { Button } from '@components/Button';
import { State } from '@store/interface';
import { mediaPlanActions } from '@store/feature/mediaPlan';
import { useTranslation } from 'react-i18next';

export const FormGeneralCta = (): JSX.Element => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
        {t('button.continue')}
      </Button>
    </>
  );
};
