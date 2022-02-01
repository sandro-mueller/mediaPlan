import { Box } from '@components/Box';

interface Props {
  component: React.ReactNode[];
}

export const FormChannelColumns = ({ component }: Props) => {
  return (
    <Box display={'flex'}>
      <Box width={'25%'}>{component[0]}</Box>

      <Box width={'25%'}>{component[1]}</Box>

      <Box width={'25%'} textAlign={'center'}>
        {component[2]}
      </Box>

      <Box width={'25%'} textAlign={'center'}>
        {component[3]}
      </Box>
    </Box>
  );
};
