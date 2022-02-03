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

export const FormChannel = (): JSX.Element => {
  const dispatch = useDispatch();
  const { baseline }: Baseline = useTheme();
  const { currentOption, channelOptions } = useSelector(
    (state: State) => state.mediaPlan
  );

  const onHandleClick = () => {
    const payload = {
      id: Math.random(),
      text: currentOption,
    };

    dispatch(mediaPlanActions.handleChannelOption(payload));

    showToast(`${currentOption} added`);
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
          <Typography variant={'body2'}>- No option added -</Typography>
        </Box>
      )}

      <FormChannelTotal />
      <FormChannelCta />
    </>
  );
};
