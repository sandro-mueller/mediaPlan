import { Box } from '@components/Box';
import { Icon } from '@components/Icon';
import { Typography } from '@components/Typography';
import { useTheme } from '@emotion/react';
import { Baseline } from '@interface/index';
import { mediaPlanActions } from '@store/feature/mediaPlan';
import { Channels } from '@type/index';
import { showToast } from '@utils/showToast';
import React from 'react';
import { useDispatch } from 'react-redux';

interface Props {
  text: Channels;
}

export const FormChannelText = ({ text }: Props) => {
  const dispatch = useDispatch();
  const { baseline }: Baseline = useTheme();

  const onHandleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { id } = event.target as HTMLDivElement;

    dispatch(mediaPlanActions.handleChanelItemDelete(id as Channels));
    showToast(`${id} deleted`, 'error');
  };

  return (
    <Box
      as={'div'}
      id={text}
      display={'flex'}
      alignItems={'center'}
      height={'56px'}
      cursor={'pointer'}
      onClick={onHandleClick}
    >
      <Box pointerEvents={'none'} mr={`${baseline.b2}px`}>
        <Icon type={'removeCircle'} />
      </Box>
      <Box pointerEvents={'none'}>
        <Typography variant={'body2'} children={text} />
      </Box>
    </Box>
  );
};
