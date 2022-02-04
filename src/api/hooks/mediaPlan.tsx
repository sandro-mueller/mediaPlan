import { createMediaPlan, copyMediaPlan } from '@api/mediaPlan';
import { mediaPlanActions } from '@store/feature/mediaPlan';
import { showToast } from '@utils/showToast';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';

export const useCreateMediaPlan = () => {
  const dispatch = useDispatch();

  return useMutation(createMediaPlan, {
    onMutate: () => {
      showToast('Request sent');
    },

    onError: () => {
      showToast('Request failed', 'error');
    },

    onSuccess: () => {
      showToast('Plan saved', 'success');
    },

    onSettled: () => {
      window.scrollTo(0, 0);
      dispatch(mediaPlanActions.handleModal());
    },
  });
};

export const useCopyMediaPlan = () => {
  const dispatch = useDispatch();

  return useMutation(copyMediaPlan, {
    onMutate: () => {
      showToast('Request sent');
    },

    onError: () => {
      showToast('Request failed', 'error');
    },

    onSuccess: () => {
      showToast('Plan copied', 'success');
    },

    onSettled: () => {
      window.scrollTo(0, 0);
      dispatch(mediaPlanActions.handleModal());
    },
  });
};
