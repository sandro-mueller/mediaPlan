import { FormChannelCta } from './FormChannelCta';
import { FormChannelSelection } from './FormChannelSelection';
import { FormChannelSelectionCta } from './FormChannelSelectionCta';
import { showToast } from '@utils/showToast';
import { useSelector } from 'react-redux';
import { State } from '@store/interface';
import { Box } from '@components/Box';
import { Typography } from '@components/Typography';
import { useTheme } from '@emotion/react';
import { Baseline } from '@interface/index';
import { FormChannelColumns } from './FormChannelColumns';
import { FormChannelItem } from './FormChannelItem';

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
      <FormChannelColumns
        component={[
          <Typography
            variant={'body1'}
            color={'#28abe2'}
            children={'Channel'}
          />,

          <Typography
            variant={'body1'}
            color={'#28abe2'}
            children={'Budget'}
          />,

          <Typography
            variant={'body1'}
            color={'#28abe2'}
            children={'Constant'}
          />,

          <Typography
            variant={'body1'}
            color={'#28abe2'}
            children={'Exclude'}
          />,
        ]}
      />

      <Box textAlign={'center'} mt={`${baseline.b4}px`} mb={`${baseline.b4}px`}>
        <Typography variant={'body2'}>- No option added -</Typography>
      </Box>

      {/* <FormChannelItem /> */}

      <FormChannelCta />
    </>
  );
};
