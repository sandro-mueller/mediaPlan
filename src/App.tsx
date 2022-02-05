import { ToastComponent as Toast } from './components/Toast';
import { Container } from './components/Container';
import { AppBar } from '@components/AppBar';
import { Wrapper } from '@components/Wrapper';
import { Box } from '@components/Box';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@theme/index';
import { State } from '@store/interface';
import { useDispatch, useSelector } from 'react-redux';
import { useToggleTheme } from './hooks/useToggleTheme';
import { Modal } from '@components/Modal';
import { mediaPlanActions } from '@store/feature/mediaPlan';
import { useModalContent } from './hooks/useModalContent';
import { Suspense } from 'react';
import { SuspenseLoader } from '@components/Suspense';

export const App = (): JSX.Element => {
  const { mode, openModal } = useSelector((state: State) => state.mediaPlan);
  const content = useModalContent();
  const dispatch = useDispatch();

  const onHandleClose = () => {
    dispatch(mediaPlanActions.handleModal());
  };

  return (
    <Suspense fallback={<SuspenseLoader />}>
      <ThemeProvider theme={useToggleTheme(mode)}>
        <Box
          minHeight={'100vh'}
          maxHeight={openModal ? '100vh' : '100%'}
          bgcolor={theme.colors.white}
        >
          <Modal
            open={openModal}
            content={content}
            handleClose={onHandleClose}
          />
          <AppBar backgroundColor={theme.colors.primary} />
          <Box mt={`${theme.baseline.b4}px`}>
            <Toast />
          </Box>
          <Wrapper>
            <Container />
          </Wrapper>
        </Box>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
