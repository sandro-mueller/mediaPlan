import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mediaPlan } from '@store/preload/mediaPlan';

const mediaPlanSlice = createSlice({
  name: 'mediaPlan',
  initialState: mediaPlan,
  reducers: {
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
  },
});

export default mediaPlanSlice.reducer;
export const mediaPlanActions = mediaPlanSlice.actions;
