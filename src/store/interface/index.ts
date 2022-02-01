import { ChannelOptions } from '@type/index';

/**
 * @author Sandro Müller
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
 * @mode Detmines the color theme of the app
 */

export interface MediaPlan {
  page: number;
  title: string;
  type: string;
  startDate: string;
  endDate: string;
  isTitle: boolean;
  isStartDate: boolean;
  isEndDate: boolean;
  isDateError: boolean;

  currentOption: ChannelOptions;

  mode: 'light' | 'dark';
}

export interface State {
  mediaPlan: MediaPlan;
}
