import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@store/index';
import { ReactElement } from 'react';

export const CreateProvider = (Component: ReactElement) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {Component}
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};
