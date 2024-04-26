import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./feed/slice";
import postPageReducer from "./postPage/slice";
import authReducer from "./auth/slice";
import signupReducer from "./signup/slice";

const store = configureStore({
  reducer: {
    feed: feedReducer,
    postPage: postPageReducer,
    auth: authReducer,
    signup: signupReducer,
  },
});

export default store;
