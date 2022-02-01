import { FormChannelCta } from './Footer/FormChannelCta';
import { FormChannelSelection } from './Header/FormChannelSelection';
import { FormChannelSelectionCta } from './Header/FormChannelSelectionCta';
import { showToast } from '@utils/showToast';
import { useSelector } from 'react-redux';
import { State } from '@store/interface';
import { Box } from '@components/Box';
import { FormChannelRow } from './Grid/FormChannelRow';
import { useTheme } from '@emotion/react';
import { FormChannelHeadlines } from './Body/FormChannelHeadlines';
import { FormChannelText } from './Item/FormChannelText';
import { FormChannelTextField } from './Item/FormChannelTextField';
import { FormChannelRadio } from './Item/FormChannelRadio';
import { Baseline } from '@interface/index';

export const FormChannel = (): JSX.Element => {
  const { currentOption } = useSelector((state: State) => state.mediaPlan);
  const { baseline }: Baseline = useTheme();

  const onHandleClick = () => {
    showToast(`${currentOption} added`);
  };

  return (
    <>
      <FormChannelSelection />
      <FormChannelSelectionCta handleClick={onHandleClick} />
      <FormChannelHeadlines />

      {/* <Box textAlign={'center'} mt={`${baseline.b4}px`} mb={`${baseline.b4}px`}>
        <Typography variant={'body2'}>- No option added -</Typography>
      </Box> */}

      <Box mt={`${baseline.b4}px`}>
        <FormChannelRow
          component={[
            <FormChannelText />,
            <FormChannelTextField />,
            <FormChannelRadio />,
            <FormChannelRadio />,
          ]}
        />
      </Box>

      <FormChannelCta />
    </>
  );
};
