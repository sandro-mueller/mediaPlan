import { Toaster } from 'react-hot-toast';
import { ToastBarComponent as ToastBar } from './ToastBar';
import { toastOptions } from './Toast.option';

export const ToastComponent = () => {
  return (
    <Toaster position="top-right" toastOptions={toastOptions}>
      {(t) => <ToastBar t={t} />}
    </Toaster>
  );
};
