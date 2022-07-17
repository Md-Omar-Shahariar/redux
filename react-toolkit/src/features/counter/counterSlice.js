import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    increaseByFive: (state) => {
      state.count = state.count + 5;
    },
  },
});

export const { increment, decrement, reset, increaseByFive } =
  counterSlice.actions;

export default counterSlice.reducer;
