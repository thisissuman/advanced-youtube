import { createSlice } from "@reduxjs/toolkit";

const whatSearchSlice = createSlice({
  name: "what",
  initialState: {context:""},
  reducers: {
    whatSearch: (state, action) => {
        state.context = action.payload;
      console.log(state.context);
    },
  },
});

export const { whatSearch } = whatSearchSlice.actions;
export default whatSearchSlice.reducer;
