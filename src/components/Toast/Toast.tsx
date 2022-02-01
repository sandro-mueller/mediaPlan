import { Toaster } from 'react-hot-toast';
import { ToastBarComponent as ToastBar } from './ToastBar';
import { toastOptions } from './Toast.option';

export const ToastComponent = (): JSX.Element => {
  return (
    <Toaster position="top-center" toastOptions={toastOptions}>
      {(t) => <ToastBar t={t} />}
    </Toaster>
  );
};
