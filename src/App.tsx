import { ToastComponent as Toast } from './components/Toast';
import { Container } from './components/Container';
import { AppBar } from '@components/AppBar';
import { Wrapper } from '@components/Wrapper';
import { Box } from '@components/Box';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@theme/index';
import { State } from '@store/interface';
import { useSelector } from 'react-redux';
import { useToggleTheme } from './hooks/useToggleTheme';
import { Modal } from '@components/Modal';

export const App = () => {
  const { mode } = useSelector((state: State) => state.mediaPlan);

  return (
    <ThemeProvider theme={useToggleTheme(mode)}>
      <Box height={'100vh'} bgcolor={theme.colors.white}>
        <Modal />
        <AppBar backgroundColor={theme.colors.primary} />
        <Box mt={`${theme.baseline.b4}px`}>
          <Toast />
        </Box>
        <Wrapper>
          <Container />
        </Wrapper>
      </Box>
    </ThemeProvider>
  );
};

export default App;
