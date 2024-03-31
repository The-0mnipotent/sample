import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navigationType: "NavBar1",
  productCardVariant: "Carousel",
  productCardType: "WithButtons",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateSettings(state, action) {
      console.log(state);
      return { ...state, ...action.payload };
    },
  },
});

export const { updateSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
