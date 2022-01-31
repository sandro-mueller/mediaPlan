import { toast, ToastBar } from 'react-hot-toast';
import { Icon } from '@components/Icon';
import { Box } from '@components/Box';

//@ts-ignore - Note: Toast interface not exported
export const ToastBarComponent = ({ t }): JSX.Element => {
  const onHandleClick = (id: string) => {
    toast.dismiss(id);
  };

  return (
    <ToastBar toast={t}>
      {({ message }) => (
        <>
          {t.type === 'error' && <Icon type="reportIcon" />}
          {t.type === 'success' && <Icon type="checkCircle" />}
          {t.type === 'blank' && <Icon type="infoIcon" />}

          {message}

          {t.type !== 'loading' && (
            <Box onClick={() => onHandleClick(t.id)} bgcolor={'transparent'}>
              <Icon type="closeIcon" />
            </Box>
          )}
        </>
      )}
    </ToastBar>
  );
};
