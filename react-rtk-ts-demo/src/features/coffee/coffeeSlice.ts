import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type initialState = {
  numberOfCoffees: number;
};
const initialState: initialState = {
  numberOfCoffees: 30,
};
const coffeeSlice = createSlice({
  name: "coffee",
  initialState,
  reducers: {
    ordered1: (state) => {
      state.numberOfCoffees--;
    },
    restocked1: (state, action: PayloadAction<number>) => {
      state.numberOfCoffees += action.payload;
    },
  },
});

export default coffeeSlice.reducer;
export const { ordered1, restocked1 } = coffeeSlice.actions;
