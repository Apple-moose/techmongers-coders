import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  me: null, //the logged-in user
  accessToken: null,
  loading: false,
};

const userpostSlice = createSlice({
  name: "userpost",
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
    },
    userLogOut: (state) => {
      localStorage.removeItem("tokenNew");
      state.me = null;
      state.accessToken = null;
      console.log(localStorage);
    },
  },
});

export const { startLoading, getToken, userLoggedIn, userLogOut } =
  userpostSlice.actions;

export default userpostSlice.reducer;
