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
    ordered: (state) => {
      state.numberOfCoffees--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numberOfCoffees += action.payload;
    },
  },
});

export default coffeeSlice.reducer;
export const { ordered, restocked } = coffeeSlice.actions;
