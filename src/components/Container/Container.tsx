import { ContainerImage } from './ContainerImage';
import { Box } from '@components/Box';
import { ContainerForm } from './ContainerForm';
import { ContainerGreetings } from './ContainerGreetings';

export const Container = (): JSX.Element => {
  return (
    <>
      <ContainerGreetings />
      <Box display={'flex'}>
        <ContainerForm />
        <ContainerImage />
      </Box>
    </>
  );
};
