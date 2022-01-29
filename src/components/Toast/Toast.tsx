import styled from '@emotion/styled';
import { Box } from '@components/Box';
import { Typography } from '@components/Typography';
import { Icon } from '@components/Icon';
import { useTheme } from '@emotion/react';
import { Baseline } from '@interface/index';

interface Props {
  title: string;
  showTitle: boolean;
}

const StyledToast = styled.div<Props>({}, (props) => ({
  position: 'absolute',
  right: 0,
  display: 'inline-block',
  height: 48,
  width: 220,
  padding: props.theme.baseline.b3,
  transform: props.showTitle ? 'translateX(0)' : 'translateX(100%)',
  transitionProperty: 'transform',
  transitionDuration: props.showTitle
    ? `${props.theme.duration.enteringScreen}ms`
    : `${props.theme.duration.leavingScreen}ms`,
  transitionTimingFunction: props.theme.easing.sharp,
  backgroundColor: props.theme.colors.success,
}));

export const Toast = ({ title, showTitle }: Props) => {
  const { baseline }: Baseline = useTheme();

  return (
    <StyledToast title={title} showTitle={showTitle}>
      <Box
        height={'100%'}
        width={'100%'}
        display={'flex'}
        justifyContent={'flex-start'}
        alignItems={'center'}
      >
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={'100%'}
        >
          <Typography variant={'body1'} color={'#fff'}>
            {title}
          </Typography>

          <Box mt={`${baseline.b1}px`}>
            <Icon type={'checkCircle'} />
          </Box>
        </Box>
      </Box>
    </StyledToast>
  );
};
