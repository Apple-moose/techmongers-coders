import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  posts: null,
  comments: [],
};

const postPageSlice = createSlice({
  name: "postPage",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    postsFullyFetched: (state, action) => {
      console.log("postsFullyFetchedActions: ", action);
      // We will get 5 posts at a time so it's important we keep the posts
      // currently in the state and add the new incoming ones at the end of the array
      state.posts = [...state.posts, ...action.payload];
      state.loading = false;
    },
  },
});

export const { startLoading, postsFullyFetched } = postPageSlice.actions;

export default postPageSlice.reducer;
