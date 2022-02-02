import { Channels } from '@type/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mediaPlan } from '@store/preload/mediaPlan';

const mediaPlanSlice = createSlice({
  name: 'mediaPlan',
  initialState: mediaPlan,
  reducers: {
    handleMode: (state, { payload }: PayloadAction<string>) => {
      state.mode = payload;
    },

    handlePage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },

    handleTitle: (state, { payload }: PayloadAction<string>) => {
      state.title = payload;
    },

    handleType: (state, { payload }: PayloadAction<string>) => {
      state.type = payload;
    },

    handleStartDate: (state, { payload }: PayloadAction<string>) => {
      state.startDate = payload;
    },

    handleEndDate: (state, { payload }: PayloadAction<string>) => {
      state.endDate = payload;
    },

    handleIsTitle: (state, { payload }: PayloadAction<boolean>) => {
      state.isTitle = payload;
    },

    handleIsStartDate: (state, { payload }: PayloadAction<boolean>) => {
      state.isStartDate = payload;
    },

    handleIsEndDate: (state, { payload }: PayloadAction<boolean>) => {
      state.isEndDate = payload;
    },

    handleIsDateError: (state, { payload }: PayloadAction<boolean>) => {
      state.isDateError = payload;
    },

    handleCurrentOption: (state, { payload }: PayloadAction<string>) => {
      state.currentOption = payload;
    },

    handleChannelOption: (
      state,
      { payload }: PayloadAction<{ id: number; text: Channels }>
    ) => {
      state.channelOptions = JSON.parse(
        JSON.stringify([...state.channelOptions, payload])
      );
    },

    handleChannelItem: (
      state,
      {
        payload,
      }: PayloadAction<{
        name: Channels;
        type: 'text' | 'radio';
        value: string;
      }>
    ) => {
      const { name, type, value } = payload;

      state.channelItems[name as keyof typeof state.channelItems][type] = value;
    },

    handleChanelItemDelete: (
      state,
      { payload: name }: PayloadAction<string>
    ) => {
      const channelOptions: { id: number; text: Channels }[] =
        state.channelOptions;

      //@ts-ignore
      state.channelOptions = channelOptions.filter(
        (channel) => channel.text !== name
      );

      state.channelItems[name as keyof typeof state.channelItems]['text'] = '';
      state.channelItems[name as keyof typeof state.channelItems]['radio'] = '';
    },
  },
});

export default mediaPlanSlice.reducer;
export const mediaPlanActions = mediaPlanSlice.actions;
