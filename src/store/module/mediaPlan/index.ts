import { createSlice } from '@reduxjs/toolkit';
import { mediaPlan } from '@store/preload/mediaPlan';

const mediaPlanSlice = createSlice({
  name: 'mediaPlan',
  initialState: mediaPlan,
  reducers: {
    handlePage: (state, action) => {
      state.page = action.payload;
    },

    handleTitle: (state, action) => {
      state.title = action.payload;
    },

    handleType: (state, action) => {
      state.type = action.payload;
    },

    handleStartDate: (state, action) => {
      state.startDate = action.payload;
    },

    handleEndDate: (state, action) => {
      state.endDate = action.payload;
    },

    handleIsTitle: (state, action) => {
      state.isTitle = action.payload;
    },

    handleIsStartDate: (state, action) => {
      state.isStartDate = action.payload;
    },

    handleIsEndDate: (state, action) => {
      state.isEndDate = action.payload;
    },

    handleIsDateError: (state, action) => {
      state.isDateError = action.payload;
    },
  },
});

export default mediaPlanSlice.reducer;
export const mediaPlanActions = mediaPlanSlice.actions;
