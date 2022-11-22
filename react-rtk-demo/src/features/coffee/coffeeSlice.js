import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfCoffees: 30,
};
const coffeeSlice = createSlice({
  name: "coffee",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfCoffees--;
    },
    restocked: (state, action) => {
      state.numberOfCoffees += action.payload;
    },
  },
});

export default coffeeSlice.reducer;
export const { ordered, restocked } = coffeeSlice.actions;
