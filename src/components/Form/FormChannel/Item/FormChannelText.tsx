import { Box } from '@components/Box';
import { Typography } from '@components/Typography';
import { Channels } from '@type/index';

interface Props {
  text: Channels;
}

export const FormChannelText = ({ text }: Props) => {
  return (
    <Box display={'flex'} alignItems={'center'} height={'56px'}>
      <Typography variant={'body2'} children={text} />
    </Box>
  );
};
