import { RadioType } from '@type/index';

export interface MediaPlan {
  title: string;
  startDate: string;
  endDate: string;
  channelItems: {
    SEA: {
      text: string;
      radio: RadioType;
    };

    Display: {
      text: string;
      radio: RadioType;
    };

    Social: {
      text: string;
      radio: RadioType;
    };

    Affiliate: {
      text: string;
      radio: RadioType;
    };

    Remarketing: {
      text: string;
      radio: RadioType;
    };
  };
}
