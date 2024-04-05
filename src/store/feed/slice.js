import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  posts: [],
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    postsFetched: (state, action) => {
      console.log("postsFetchedActions: ", action);
      state.posts = [...action.payload];
      state.loading = false;
    },
  },
});

export const { startLoading, postsFetched } = feedSlice.actions;

export default feedSlice.reducer;
