import logger from 'redux-logger';
import mediPlanReducer from './module/mediaPlan';
import { mediaPlan } from './preload/mediaPlan';
import { configureStore } from '@reduxjs/toolkit';
import { persistMediaPlan } from './persist';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const isDevelopment = process.env.NODE_ENV !== 'production';
const middleware = isDevelopment ? [logger] : [];

// STORE
export const store = configureStore({
  reducer: {
    mediaPlan: persistReducer(persistMediaPlan, mediPlanReducer),
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(...middleware),

  preloadedState: { mediaPlan },
  devTools: isDevelopment,
});

// PERSISTOR
export const persistor = persistStore(store);
