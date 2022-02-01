import { Box } from '@components/Box';
import { Icon } from '@components/Icon';
import { Typography } from '@components/Typography';
import { useTheme } from '@emotion/react';
import { Baseline } from '@interface/index';
import { State } from '@store/interface';
import { useSelector } from 'react-redux';

interface Props {
  handleClick: () => void;
}

export const FormChannelSelectionCta = ({ handleClick }: Props) => {
  const { baseline }: Baseline = useTheme();
  const { currentOption } = useSelector((state: State) => state.mediaPlan);

  return (
    <div>
      <Box
        as={'div'}
        display={'flex'}
        alignItems={'center'}
        mt={`${baseline.b4}px`}
        mb={`${baseline.b4}px`}
        onClick={handleClick}
      >
        <Box cursor={'pointer'} display={'flex'} alignItems={'center'}>
          <Box mr={`${baseline.b2}px`}>
            <Icon type={'addCircle'} />
          </Box>

          <Typography variant={'body1'}>
            Add selected option to budget:
          </Typography>

          <Typography variant={'body1'} color={'#7bc67e'}>
            {` ${currentOption}`}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
