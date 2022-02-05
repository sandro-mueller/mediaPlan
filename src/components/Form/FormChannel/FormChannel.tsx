import { FormChannelCta } from './Footer/FormChannelCta';
import { FormChannelSelection } from './Header/FormChannelSelection';
import { FormChannelSelectionCta } from './Header/FormChannelSelectionCta';
import { showToast } from '@utils/showToast';
import { State } from '@store/interface';
import { FormChannelHeadlines } from './Body/FormChannelHeadlines';
import { FormChannelOptions } from './Body/FormChannelOptions';
import { useDispatch, useSelector } from 'react-redux';
import { mediaPlanActions } from '@store/feature/mediaPlan';
import { Box } from '@components/Box';
import { Typography } from '@components/Typography';
import { useTheme } from '@emotion/react';
import { Baseline } from '@interface/index';
import { FormChannelTotal } from './Body';
import { useTranslation } from 'react-i18next';

export const FormChannel = (): JSX.Element => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { baseline }: Baseline = useTheme();
  const { currentOption, channelOptions } = useSelector(
    (state: State) => state.mediaPlan
  );

  const onHandleClick = () => {
    dispatch(mediaPlanActions.handleChannelOption({ text: currentOption }));

    const title = t('channelAdded', { channel: currentOption, ns: 'info' });
    showToast(title);
  };

  return (
    <>
      <FormChannelSelection />
      <FormChannelSelectionCta handleClick={onHandleClick} />
      <FormChannelHeadlines />
      <FormChannelOptions channelOptions={channelOptions} />

      {!channelOptions.length && (
        <Box
          textAlign={'center'}
          mt={`${baseline.b4}px`}
          mb={`${baseline.b4}px`}
        >
          <Typography variant={'body2'}>{'channelBody.noOption'}</Typography>
        </Box>
      )}

      <FormChannelTotal />
      <FormChannelCta />
    </>
  );
};
