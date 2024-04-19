import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  me: null, //the logged-in user
  accessToken: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    getToken: (state, action) => {
      state.loading = false;
      state.accessToken = action.payload;
    },
    userLoggedIn: (state, action) => {
      state.loading = false;
      state.me = action.payload;
      console.log(action.payload)
    },
  },
});

export const { startLoading, getToken, userLoggedIn } = authSlice.actions;

export default authSlice.reducer;
