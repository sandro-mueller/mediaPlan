import { Box } from '@components/Box';
import { ContainerGreetings } from './ContainerGreetings';
import { ContainerForm } from './ContainerForm';
import { ContainerImage } from './ContainerImage';

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
