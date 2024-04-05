import { configureStore } from "@reduxjs/toolkit";
// import someFeatureReducer from "./someFeature/reducer";

const store = configureStore({
  reducer: {
    // something: someFeatureReducer
    // ...
  },
});

export default store;
