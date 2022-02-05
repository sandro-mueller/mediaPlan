import { Box } from '@components/Box';
import { Button } from '@components/Button';
import { Typography } from '@components/Typography';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  open: boolean;
  content: string;
  handleClose: () => void;
}

const StyledModal = styled.div(
  {
    height: '100%',
    maxWidth: 400,
    width: '100%',
  },

  (props) => ({
    padding: `${props.theme.baseline.b4}px`,
    backgroundColor: props.theme.colors.white,
  })
);

export const Modal = ({ open, content, handleClose }: Props) => {
  const { baseline, colors, zIndex } = useTheme();

  return (
    <Box
      position={'absolute'}
      top={0}
      right={0}
      display={open ? 'flex' : 'none'}
      justifyContent={'center'}
      alignItems={'center'}
      minHeight={'100vh'}
      width={'100%'}
      p={`${baseline.b3}px`}
      zIndex={zIndex.modal}
    >
      <Box
        height={'100%'}
        width={'100%'}
        position={'fixed'}
        top={0}
        zIndex={-1}
        bgcolor={colors.text}
      />
      <StyledModal>
        <Box mb={`${baseline.b3}px`}>
          <Typography variant={'h2'}>Backend</Typography>
        </Box>

        <Box mb={`${baseline.b3}px`}>
          <Typography variant={'body2'}>{content}</Typography>
        </Box>

        <Box width={'100%'} textAlign={'right'}>
          <Button
            variant={'contained'}
            color={'rgba(0, 0, 0, 0.6)'}
            size={'small'}
            handleClick={handleClose}
          >
            button.close
          </Button>
        </Box>
      </StyledModal>
    </Box>
  );
};
