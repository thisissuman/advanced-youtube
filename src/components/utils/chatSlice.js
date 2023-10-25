import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessgae: (state, action) => {
      state.message.push(action.payload);
    },
  },
});

export const { addMessgae } = chatSlice.actions;
export default chatSlice.reducer;
