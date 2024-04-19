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
      console.log("postsFullyFetchedActions: ", action.payload);
      state.loading = false;
      state.post = action.payload.post;
      state.comments = action.payload.comments;
    },
  },
});

export const { startLoading, postsFullyFetched } = postPageSlice.actions;

export default postPageSlice.reducer;
