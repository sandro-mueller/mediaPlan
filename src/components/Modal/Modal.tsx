import { Box } from '@components/Box';
import { Button } from '@components/Button';
import { Typography } from '@components/Typography';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { State } from '@store/interface';
import { useSelector } from 'react-redux';

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

export const Modal = () => {
  const { baseline, colors, zIndex } = useTheme();
  const { title, startDate, endDate, channelItems } = useSelector(
    (state: State) => state.mediaPlan
  );

  const backendObject = `{
   title: ${title},
   startDate: ${startDate},
   endDate: ${endDate},
   
   channelItems: {
    sea: {
     text: ${channelItems.SEA.text},
     radio: '${channelItems.SEA.radio}',
    },

    display: {
     text: ${channelItems.Display.text},
     radio: '${channelItems.Display.radio}',
    },
    
    social: {
     text: ${channelItems.Social.text},
     radio: '${channelItems.Social.radio}',
    },

    affiliate: {
     text: ${channelItems.Affiliate.text},
     radio: '${channelItems.Affiliate.radio}',
    },

    remarketing: {
     text: ${channelItems.Remarketing.text},
     radio: '${channelItems.Remarketing.radio}',
    }
}`;

  return (
    <>
      <Box
        position={'absolute'}
        top={0}
        right={0}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        minHeight={'100vh'}
        width={'100%'}
        p={`${baseline.b3}px`}
        bgcolor={colors.text}
        zIndex={zIndex.modal}
      >
        <StyledModal>
          <Box mb={`${baseline.b3}px`}>
            <Typography variant={'h2'}>Backend</Typography>
          </Box>

          <Box mb={`${baseline.b3}px`}>
            <Typography variant={'body2'}>{backendObject}</Typography>
          </Box>

          <Box width={'100%'} textAlign={'right'} mb={`${baseline.b3}px`}>
            <Button
              variant={'contained'}
              color={'rgba(0, 0, 0, 0.6)'}
              size={'small'}
            >
              Close
            </Button>
          </Box>
        </StyledModal>
      </Box>
    </>
  );
};
