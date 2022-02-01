import { Box } from '@components/Box';
import { Radio } from '@components/Form/elements/Radio';

export const FormChannelRadio = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'56px'}
    >
      <Radio name="SEA" id={'1'} />
    </Box>
  );
};
