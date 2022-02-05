import { useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import { Box } from '@components/Box';
import { Typography } from '@components/Typography';
import { Icon } from '@components/Icon';
import { Baseline } from '@interface/index';
import { State } from '@store/interface';

interface Props {
  handleClick: () => void;
}

export const FormChannelSelectionCta = ({
  handleClick,
}: Props): JSX.Element => {
  const { baseline }: Baseline = useTheme();
  const { currentOption } = useSelector((state: State) => state.mediaPlan);

  // NO AVAILABLE OPTIONS LEFT
  if (!currentOption) {
    return <Box height={'90px'} />;
  }

  return (
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

        <Typography variant={'body1'}>{'channelBody.cta'}</Typography>

        <Typography variant={'body1'} color={'#7bc67e'}>
          {` ${currentOption}`}
        </Typography>
      </Box>
    </Box>
  );
};
