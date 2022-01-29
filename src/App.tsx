import { Toast } from './components/Toast';
import { Container } from './components/Container';
import { AppBar } from '@components/AppBar';
import { useTheme } from '@emotion/react';
import { Colors } from './interface';
import { Wrapper } from '@components/Wrapper';

export const App = () => {
  const { colors }: Colors = useTheme();

  return (
    <>
      <AppBar backgroundColor={colors.primary} />
      <Toast />
      <Wrapper>
        <Container />
      </Wrapper>
    </>
  );
};

export default App;
