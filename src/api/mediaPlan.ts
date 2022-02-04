import axios, { AxiosResponse } from 'axios';
import { MediaPlan } from './interface';
import { v4 as uuidv4 } from 'uuid';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

export const createMediaPlan = async (
  payload: MediaPlan
): Promise<MediaPlan> => {
  // Simulate backed call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { data }: AxiosResponse<MediaPlan> = await api.post('/mediaPlan', {
    id: uuidv4(),
    ...payload,
  });

  return data;
};

export const copyMediaPlan = async (payload: MediaPlan): Promise<MediaPlan> => {
  // Simulate backed call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { data }: AxiosResponse<MediaPlan> = await api.post('/copyPlan', {
    id: uuidv4(),
    ...payload,
  });

  return data;
};
