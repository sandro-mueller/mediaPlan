import axios, { AxiosResponse } from 'axios';
import { RadioType } from '@type/index';
import { v4 as uuidv4 } from 'uuid';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

interface MediaPlan {
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

export const createMediaPlan = async (payload: MediaPlan) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { data }: AxiosResponse = await api.post('/mediaPlan', {
    id: uuidv4(),
    ...payload,
  });

  return data;
};

export const copyMediaPlan = async (payload: MediaPlan) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { data }: AxiosResponse = await api.post('/copyPlan', {
    id: uuidv4(),
    ...payload,
  });

  return data;
};
