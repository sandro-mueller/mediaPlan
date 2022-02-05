import { LanguageType } from './../../../type/index';
import { RadioType } from '@type/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mediaPlan } from '@store/preload/mediaPlan';
import { v4 as uuidv4 } from 'uuid';
import {
  ChannelItemKeys,
  ChannelOption,
  Channels,
  ThemeMode,
  TypeVariants,
} from '@type/index';

const mediaPlanSlice = createSlice({
  name: 'mediaPlan',
  initialState: mediaPlan,
  reducers: {
    // APP
    handleMode: (state, { payload }: PayloadAction<ThemeMode>) => {
      state.mode = payload;
    },

    handleModal: (state) => {
      state.openModal = !state.openModal;
    },

    handleLanguage: (state, { payload }: PayloadAction<LanguageType>) => {
      state.language = payload;
    },

    // GENERAL
    handlePage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },

    handleTitle: (state, { payload }: PayloadAction<string>) => {
      state.title = payload;
    },

    handleType: (state, { payload }: PayloadAction<TypeVariants>) => {
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

    // CHANNEL
    handleCurrentOption: (state, { payload }: PayloadAction<Channels>) => {
      state.currentOption = payload;
    },

    handleChannelOption: {
      reducer: (state, { payload }: PayloadAction<ChannelOption>) => {
        state.channelOptions = [...state.channelOptions, payload];
      },

      prepare: ({ text }: { text: Channels }) => ({
        payload: {
          id: uuidv4(),
          text,
        },
      }),
    },

    handleChannelItem: (
      state,
      {
        payload,
      }: PayloadAction<{
        name: Channels;
        type: ChannelItemKeys;
        value: RadioType | string;
      }>
    ) => {
      const { name, type, value } = payload;

      if (type === 'text') {
        state.channelItems[name][type] = value as string;
      }

      if (type === 'radio') {
        state.channelItems[name][type] = value as RadioType;
      }
    },

    handleChanelItemDelete: (
      state,
      { payload: name }: PayloadAction<Channels>
    ) => {
      const channelOptions: ChannelOption[] = state.channelOptions;

      state.channelOptions = channelOptions.filter(
        (channel) => channel.text !== name
      );

      state.channelItems[name]['text'] = '';
      state.channelItems[name]['radio'] = 'constant';
    },

    handleClearGeneral: (state) => {
      state.title = '';
      state.startDate = '';
      state.endDate = '';
    },

    handleClearChannel: (state) => {
      state.currentOption = mediaPlan.currentOption;
      state.channelOptions = mediaPlan.channelOptions;
      state.channelItems = mediaPlan.channelItems;
    },
  },
});

export default mediaPlanSlice.reducer;
export const mediaPlanActions = mediaPlanSlice.actions;
