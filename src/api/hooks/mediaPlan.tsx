import { createMediaPlan, copyMediaPlan } from '@api/mediaPlan';
import { mediaPlanActions } from '@store/feature/mediaPlan';
import { showToast } from '@utils/showToast';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';

export const useCreateMediaPlan = () => {
  const dispatch = useDispatch();

  return useMutation(createMediaPlan, {
    onMutate: () => {
      showToast('requestSent');
    },

    onError: () => {
      showToast('requestFailed', 'error');
    },

    onSuccess: () => {
      showToast('planSaved', 'success');
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
      showToast('requestSent');
    },

    onError: () => {
      showToast('requestFailed', 'error');
    },

    onSuccess: () => {
      showToast('planCopied', 'success');
    },

    onSettled: () => {
      window.scrollTo(0, 0);
      dispatch(mediaPlanActions.handleModal());
    },
  });
};
