import styled from '@emotion/styled';
import lodash from 'lodash';
import { Property } from 'csstype';
import { Box } from '@components/Box';
import { Icon } from '@components/Icon';
import { Button } from '@components/Button';
import { showToast } from '@utils/showToast';
import { State } from '@store/interface';
import { mediaPlanActions } from '@store/feature/mediaPlan';
import { useDispatch, useSelector } from 'react-redux';
import { createMediaQueries } from '@utils/createMediaQueries';
import { AppBarLanguage } from './AppBarLanguage';

type Props = {
  backgroundColor?: Property.BackgroundColor;
};

const StyledAppBar = styled.div<Props>(
  createMediaQueries(600, 900)({ height: [56, 64] }),

  (props) => ({
    padding: `0 ${props.theme.baseline.b3}px`,
    backgroundColor: props.backgroundColor,
  })
);

export const AppBar = ({ backgroundColor }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state: State) => state.mediaPlan);

  const onHandleClick = () => {
    switch (mode) {
      case 'dark':
        dispatch(mediaPlanActions.handleMode('light'));
        break;
      case 'light':
        dispatch(mediaPlanActions.handleMode('dark'));
        break;
    }

    showToast('Theme changed');
  };

  return (
    <StyledAppBar backgroundColor={backgroundColor}>
      <Box
        height={'100%'}
        width={'100%'}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Icon type={'menuIcon'} />

        <AppBarLanguage />

        <Button
          variant={'contained'}
          color={'#28abe2'}
          size={'small'}
          width={'162px'}
          handleClick={lodash.throttle(onHandleClick, 3000)}
        >
          {mode === 'light' ? 'Dark mode' : 'Light mode'}
        </Button>
      </Box>
    </StyledAppBar>
  );
};
