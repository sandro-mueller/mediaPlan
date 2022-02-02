import { Box } from '@components/Box';
import { Typography } from '@components/Typography';
import { useTheme } from '@emotion/react';
import { Baseline } from '@interface/index';
import { State } from '@store/interface';
import { useSelector } from 'react-redux';

export const FormChannelTotal = () => {
  const { baseline }: Baseline = useTheme();

  const { channelOptions } = useSelector((state: State) => state.mediaPlan);

  if (!channelOptions.length) {
    return null;
  }

  return (
    <Box mt={`${baseline.b3}px`} mb={`${baseline.b3}px`}>
      <Typography variant={'h2'}>Total: $100</Typography>
    </Box>
  );
};
