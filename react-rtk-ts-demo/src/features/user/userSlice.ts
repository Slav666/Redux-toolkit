import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
type Users = {
  id: string;
  name: string;
  email: string;
};

type InitialState = {
  loading: boolean;
  users: Users[];
  error: string | null;
};
const initialState: InitialState = {
  loading: false,
  users: [],
  error: "",
};

export let fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<Users[]>) => {
        state.loading = false;
        state.users = action.payload;
        console.log("users", state.users);
        state.error = "";
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default userSlice.reducer;
