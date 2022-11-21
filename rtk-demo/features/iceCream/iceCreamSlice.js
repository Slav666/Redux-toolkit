const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numberOfIceCreams: 40,
};

const iceCremeSlice = createSlice({
  name: "iceCreme",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIceCreams--;
    },
    restocked: (state, actions) => {
      state.numberOfIceCreams += actions.payload;
    },
  },
});
module.exports = iceCremeSlice.reducer;
module.exports.iceCreamAction = iceCremeSlice.actions;
