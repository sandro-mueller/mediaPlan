import { MediaPlan } from '@store/interface';

export const mediaPlan: MediaPlan = {
  // APP
  mode: 'light',
  openModal: false,

  // GENERAL
  page: 0,
  title: '',
  type: 'title',
  startDate: '',
  endDate: '',
  isTitle: false,
  isStartDate: false,
  isEndDate: false,
  isDateError: false,

  // CHANNEL
  currentOption: 'SEA',
  channelOptions: [],
  channelItems: {
    SEA: {
      text: '',
      radio: 'constant',
    },

    Display: {
      text: '',
      radio: 'constant',
    },

    Social: {
      text: '',
      radio: 'constant',
    },

    Affiliate: {
      text: '',
      radio: 'constant',
    },

    Remarketing: {
      text: '',
      radio: 'constant',
    },
  },
};
