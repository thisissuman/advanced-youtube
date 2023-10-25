import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessgae: (state, action) => {
      
      state.message.splice(7,1);
      state.message.push(action.payload);
    },
    addMyMessgae: (state, action) => {

      state.message.push(action.payload);
    },
  },
});

export const { addMessgae,addMyMessgae } = chatSlice.actions;
export default chatSlice.reducer;
