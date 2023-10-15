import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: { isMenuOpen: true },
  reducers: {
    sideBarHandeler: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    hideSidebarHandeler: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { sideBarHandeler,hideSidebarHandeler } = appSlice.actions;
export default appSlice.reducer;
