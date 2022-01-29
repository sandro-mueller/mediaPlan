import { ContainerImage } from './ContainerImage';
import { Typography } from '@components/Typography';
import { Box } from '@components/Box';
import { ContainerForm } from './ContainerForm';
import { useTheme } from '@emotion/react';
import { Baseline } from '@interface/index';

export const Container = () => {
  const { baseline }: Baseline = useTheme();

  return (
    <>
      <Box mb={`${baseline.b2}px`}>
        <Typography variant={'h1'}>Create a media plan</Typography>
      </Box>

      <Typography variant={'body1'}>
        Fill in the form to calculate the budget
      </Typography>

      <Box display={'flex'} bgcolor={'red'}>
        <ContainerForm />
        <ContainerImage />
      </Box>
    </>
  );
};
