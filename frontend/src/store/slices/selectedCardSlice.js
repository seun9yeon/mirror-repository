import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  imageId: -1,
  imageUrl: '',
  title: '',
};

const selectedCardSlice = createSlice({
  name: 'selectedCard',
  initialState,
  reducers: {
    selectCard: (state, action) => {
      state.imageId = action.payload.imageId;
      state.imageUrl = action.payload.imageUrl;
    },
    addTitleInCard: (state, action) => {
      state.title = action.payload.title;
    },
    initCard: (state) => {
      state.imageId = -1;
      state.title = '';
      state.imageUrl = '';
    },
  },
});

export const { selectCard, addTitleInCard, initCard } = selectedCardSlice.actions;
export default selectedCardSlice.reducer;