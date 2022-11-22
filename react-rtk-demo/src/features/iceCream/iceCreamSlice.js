import { createSlice } from "@reduxjs/toolkit";
// import { ordered as cakeOrdered } from "../cake/cakeSlice";
const initialState = {
  numberOfIceCreams: 40,
};

const iceCremeSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIceCreams--;
    },
    restocked: (state, actions) => {
      state.numberOfIceCreams += actions.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(cakeOrdered, (state) => {
  //     state.numberOfIceCreams--;
  //   });
  // },
});
export default iceCremeSlice.reducer;
export const { ordered, restocked } = iceCremeSlice.actions;
