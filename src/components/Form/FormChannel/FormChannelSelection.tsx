import { Icon } from '@components/Icon';
import { Typography } from '@components/Typography';
import { CHANNEL_OPTIONS } from '@constants/channel';
import { Select } from '../elements/Select';
import { useTheme } from '@emotion/react';
import { Baseline } from '@interface/index';
import { State } from '@store/interface';
import { mediaPlanActions } from '@store/module/mediaPlan';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@components/Box';

export const FormChannelSelection = (): JSX.Element => {
  const dispatch = useDispatch();
  const { baseline }: Baseline = useTheme();
  const { currentOption } = useSelector((state: State) => state.mediaPlan);

  const onHandleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch(mediaPlanActions.handleCurrentOption(value));
  };

  return (
    <>
      <Select
        value={currentOption}
        options={CHANNEL_OPTIONS}
        handleChange={onHandleChange}
      />

      <Box
        display={'flex'}
        alignItems={'center'}
        mt={`${baseline.b4}px`}
        mb={`${baseline.b4}px`}
      >
        <Box mr={`${baseline.b2}px`} cursor={'pointer'}>
          <Icon type={'addCircle'} />
        </Box>

        <Typography variant={'body1'}>
          Add selected option to budget:
        </Typography>

        <Typography variant={'body1'} color={'#7bc67e'}>
          {` ${currentOption}`}
        </Typography>
      </Box>
    </>
  );
};
