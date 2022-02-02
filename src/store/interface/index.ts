import { Channels, ThemeMode, TypeVariants } from '@type/index';

/**
 * @author Sandro Müller
 * @mode Detmines the color theme of the app
 * @mode Detmines if the save plan modal is open
 * @page The current page of the wizard
 * @title The title of the media plan
 * @type Determines which values was changed last
 * @statDate The start date of the media plan
 * @endDate The end date of the media plan
 * @isTitle Determines if title has a value
 * @isStartDate Determines if start date has a value
 * @isEndDate Determines if end date has a value
 * @isDateError Determines if date has wrong input
 * @currentOption Selected option to calculate budget
 * @channelOptions Array to render channel items for DOM
 * @channelItems Object to keep track of entered values for channel items
 */

export interface MediaPlan {
  // APP
  mode: ThemeMode;
  openModal: boolean;

  // GENERAL
  page: number;
  title: string;
  type: TypeVariants;
  startDate: string;
  endDate: string;
  isTitle: boolean;
  isStartDate: boolean;
  isEndDate: boolean;
  isDateError: boolean;

  // CHANNEL
  currentOption: Channels;
  channelOptions: { id: number; text: Channels }[];
  channelItems: {
    SEA: {
      text: string;
      radio: string;
    };

    Display: {
      text: string;
      radio: string;
    };

    Social: {
      text: string;
      radio: string;
    };

    Affiliate: {
      text: string;
      radio: string;
    };

    Remarketing: {
      text: string;
      radio: string;
    };
  };
}

export interface State {
  mediaPlan: MediaPlan;
}
