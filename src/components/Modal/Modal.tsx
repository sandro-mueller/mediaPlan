import { Box } from '@components/Box';
import { Button } from '@components/Button';
import { Typography } from '@components/Typography';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { State } from '@store/interface';
import { useSelector } from 'react-redux';

interface Props {
  open: boolean;
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

export const Modal = ({ open, handleClose }: Props) => {
  const { baseline, colors, zIndex } = useTheme();
  const { title, startDate, endDate, channelItems } = useSelector(
    (state: State) => state.mediaPlan
  );

  // Only for demonstration purposes
  const backendObject = `{
   title: ${title},
   startDate: ${startDate},
   endDate: ${endDate},
   
   channelItems: {
    sea: {
     text: ${channelItems.SEA.text.length ? channelItems.SEA.text : 'null'},
     radio: '${
       channelItems.SEA.radio.length ? channelItems.SEA.radio : 'null'
     }',
    },

    display: {
     text: ${
       channelItems.Display.text.length ? channelItems.Display.text : 'null'
     },
     radio: '${
       channelItems.Display.radio.length ? channelItems.Display.radio : 'null'
     }',
    },
    
    social: {
     text: ${
       channelItems.Social.text.length ? channelItems.Social.text : 'null'
     },
     radio: '${
       channelItems.Social.radio.length ? channelItems.Social.radio : 'null'
     }',
    },

    affiliate: {
     text: ${
       channelItems.Affiliate.text.length ? channelItems.Affiliate.text : 'null'
     },
     radio: '${
       channelItems.Affiliate.radio.length
         ? channelItems.Affiliate.radio
         : 'null'
     }',
    },

    remarketing: {
     text: ${
       channelItems.Remarketing.text.length
         ? channelItems.Remarketing.text
         : 'null'
     },
     radio: '${
       channelItems.Remarketing.radio.length
         ? channelItems.Remarketing.radio
         : 'null'
     }',
    }
}`;

  return (
    <>
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
            <Typography variant={'body2'}>{backendObject}</Typography>
          </Box>

          <Box width={'100%'} textAlign={'right'}>
            <Button
              variant={'contained'}
              color={'rgba(0, 0, 0, 0.6)'}
              size={'small'}
              handleClick={handleClose}
            >
              Close
            </Button>
          </Box>
        </StyledModal>
      </Box>
    </>
  );
};
