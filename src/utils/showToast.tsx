import toast from 'react-hot-toast';
import { theme } from '@theme/index';

type ToastType = 'success' | 'error' | undefined;

export const showToast = (title: string, type?: ToastType) => {
  if (type === 'success') {
    return toast.success(title, {
      style: { backgroundColor: `${theme.colors.success}` },
    });
  }

  if (type === 'error') {
    return toast.success(title, {
      style: { backgroundColor: `${theme.colors.error}` },
    });
  }

  return toast(title, {
    style: { backgroundColor: `${theme.colors.secondary}` },
  });
};
