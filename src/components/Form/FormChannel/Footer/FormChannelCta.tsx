import lodash from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import { Box } from '@components/Box';
import { Button } from '@components/Button';
import { Baseline } from '@interface/index';
import { mediaPlanActions } from '@store/feature/mediaPlan';
import { State } from '@store/interface';
import { useCopyMediaPlan, useCreateMediaPlan } from '@api/hooks/mediaPlan';
import { useTranslation } from 'react-i18next';

export const FormChannelCta = (): JSX.Element => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { mutate: createMediaPlan } = useCreateMediaPlan();
  const { mutate: copyMediaPlan } = useCopyMediaPlan();

  const { baseline }: Baseline = useTheme();
  const { channelOptions } = useSelector((state: State) => state.mediaPlan);
  const { title, startDate, endDate, channelItems } = useSelector(
    (state: State) => state.mediaPlan
  );

  const onHandlePage = (page: number) => {
    dispatch(mediaPlanActions.handlePage(page));
  };

  const onHandleCopy = () => {
    // API CALL
    copyMediaPlan({
      title,
      startDate,
      endDate,
      channelItems,
    });
  };

  const onHandleSave = () => {
    // API CALL
    createMediaPlan({
      title,
      startDate,
      endDate,
      channelItems,
    });
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
          {t('button.back')}
        </Button>

        <Button
          variant={'outlined'}
          color={'#28abe2'}
          size={'large'}
          width={`calc(50% - ${baseline.b2}px)`}
          disabled={!channelOptions.length}
          handleClick={lodash.throttle(onHandleCopy, 3000)}
        >
          {t('button.copyPlan')}
        </Button>
      </Box>

      <Button
        variant={'contained'}
        color={'#7bc67e'}
        size={'large'}
        fullWidth
        disabled={!channelOptions.length}
        handleClick={lodash.throttle(onHandleSave, 3000)}
      >
        {t('button.savePlan')}
      </Button>
    </>
  );
};
