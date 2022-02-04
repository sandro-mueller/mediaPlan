import { showToast } from '@utils/showToast';
import { QueryClient } from 'react-query';

// TODO
const asyncError = (error: unknown) => {
  const message = error instanceof Error ? error.message : error;
  showToast(message as string, 'error');
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: asyncError,
      staleTime: 0,
      cacheTime: 30000,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    },
    mutations: {
      onError: asyncError,
    },
  },
});
