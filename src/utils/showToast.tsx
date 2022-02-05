import toast from 'react-hot-toast';
import { theme } from '@theme/index';
import i18next from 'i18next';
type ToastType = 'success' | 'error' | undefined;

export const showToast = (title: string, type?: ToastType) => {
  if (type === 'success') {
    return toast.success(i18next.t(title, { ns: 'success' }), {
      style: { backgroundColor: `${theme.colors.success}` },
    });
  }

  console.log(type);

  if (type === 'error') {
    return toast.error(i18next.t(title, { ns: 'error' }), {
      style: { backgroundColor: `${theme.colors.error}` },
    });
  }

  return toast(i18next.t(title, { ns: 'info' }), {
    style: { backgroundColor: `${theme.colors.secondary}` },
  });
};
