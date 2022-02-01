import { Box } from '@components/Box';
import { Radio } from '@components/Form/elements';
import { Channels } from '@type/index';

interface Props {
  name: Channels;
  value: 'constant' | 'exclude';
  id: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormChannelRadio = ({ name, value, id, handleChange }: Props) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'56px'}
    >
      <Radio name={name} value={value} id={id} handleChange={handleChange} />
    </Box>
  );
};
