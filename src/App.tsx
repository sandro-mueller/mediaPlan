import { Toast } from './components/Toast';
import { Container } from './components/Container';
import { AppBar } from '@components/AppBar';
import { useTheme } from '@emotion/react';
import { Colors } from './interface';

export const App = () => {
  const { colors }: Colors = useTheme();

  return (
    <>
      <AppBar backgroundColor={colors.primary} />
      <Toast />
      <Container />
    </>
  );
};

export default App;
