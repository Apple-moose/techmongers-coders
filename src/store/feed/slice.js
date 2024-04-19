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
    reset: (state) => {
      state.posts = [];},
    postsFetched: (state, action) => {
      console.log("postsFetchedActions: ", action);
      // We will get 5 posts at a time so it's important we keep the posts
      // currently in the state and add the new incoming ones at the end of the array
      state.posts = [...state.posts, ...action.payload];
      state.loading = false;
    },
  },
});

export const { startLoading, reset, postsFetched } = feedSlice.actions;

export default feedSlice.reducer;
