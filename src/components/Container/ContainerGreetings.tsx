import styled from '@emotion/styled';
import lodash from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import { Box } from '@components/Box';
import { Button } from '@components/Button';
import { Typography } from '@components/Typography';
import { showToast } from '@utils/showToast';
import { Baseline } from '@interface/index';
import { State } from '@store/interface';
import { mediaPlanActions } from '@store/feature/mediaPlan';
import { createMediaQueries } from '@utils/createMediaQueries';
import { useTranslation } from 'react-i18next';

const StyledContainerGreetings = styled.div(
  createMediaQueries(
    768,
    1060,
    1200
  )({
    width: ['100%', '100%', '50%'],
    textAlign: ['center', 'left', 'left'],
  })
);

const StyledBox = styled.div(
  createMediaQueries(
    768,
    1060,
    1200
  )({
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
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { baseline }: Baseline = useTheme();
  const { page, isTitle, isStartDate, isEndDate, channelOptions } = useSelector(
    (state: State) => state.mediaPlan
  );

  const onHandleClick = () => {
    if (!page) {
      dispatch(mediaPlanActions.handleClearGeneral());
    }

    if (page) {
      dispatch(mediaPlanActions.handleClearChannel());
    }

    showToast('Form cleared', 'success');
  };

  const checkButtonState = () => {
    if (!page) {
      return !(isTitle || isStartDate || isEndDate);
    }

    if (page) {
      return !channelOptions.length;
    }

    return false;
  };

  const disabled = checkButtonState();

  return (
    <Box mb={`${baseline.b4}px`}>
      <StyledContainerGreetings>
        <Typography variant={'h1'}>{t('headline')}</Typography>

        <StyledBox>
          <Typography variant={'body1'}>{t('tagline')}</Typography>

          <Button
            variant={'outlined'}
            color={'#28abe2'}
            size={'large'}
            disabled={disabled}
            handleClick={lodash.throttle(onHandleClick, 3000)}
          >
            {t('button.clearForm')}
          </Button>
        </StyledBox>
      </StyledContainerGreetings>
    </Box>
  );
};
