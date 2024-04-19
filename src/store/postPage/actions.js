import axios from "axios";
import { postsFullyFetched, startLoading } from "./slice";
import { reset } from "../feed/slice";

const API_URL = `https://coders-network-api.onrender.com`;

export const fetchPosts = (id) => async (dispatch) => {
  dispatch(startLoading());
  dispatch(reset());

  //The axios.get() method will return a promise.
  //The Promise.all() requires an array of promises.
  const [postResponse, commentsResponse] = await Promise.all([
    axios.get(`${API_URL}/posts/${id}`),
    axios.get(`${API_URL}/posts/${id}/comments`),
  ]);
  dispatch(
    postsFullyFetched({
      post: postResponse.data,
      comments: commentsResponse.data,
    })
  );

};
