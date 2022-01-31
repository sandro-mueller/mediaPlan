import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { theme } from '@theme/index';
import { store, persistor } from '@store/index';
import { ReactElement } from 'react';

export const createProvider = (Component: ReactElement) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>{Component}</ThemeProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};
