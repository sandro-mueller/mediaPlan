import { Box } from '@components/Box';
import { Typography } from '@components/Typography';
import { useTheme } from '@emotion/react';
import { Baseline } from '@interface/index';
import { State } from '@store/interface';
import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const FormChannelTotal = (): JSX.Element | null => {
  const { baseline }: Baseline = useTheme();

  const { channelOptions, channelItems } = useSelector(
    (state: State) => state.mediaPlan
  );

  // CALCULATE IN BACKEND
  const [total, setTotal] = React.useState<number>(0);

  const calculateBudget = useCallback(() => {
    let total = 0;
    Object.values(channelItems).forEach((val) => {
      return (total += !!val.text ? +val.text : 0);
    });

    isNaN(total) ? setTotal(0) : setTotal(+total.toFixed(2));
  }, [channelItems]);

  useEffect(() => {
    calculateBudget();
  }, [calculateBudget]);

  if (!channelOptions.length) {
    return null;
  }

  return (
    <Box display={'flex'} mt={`${baseline.b3}px`} mb={`${baseline.b3}px`}>
      <Typography variant={'h2'}>{'channelBody.total'}</Typography>
      <Typography variant={'h2'}>{`${total}`}</Typography>
    </Box>
  );
};
