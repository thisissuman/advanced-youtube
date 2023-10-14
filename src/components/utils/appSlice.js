import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: { isMenuOpen: true },
  reducers: {
    sideBarHandeler: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { sideBarHandeler } = appSlice.actions;
export default appSlice.reducer;
