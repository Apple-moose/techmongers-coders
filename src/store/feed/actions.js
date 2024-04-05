import axios from "axios";
import { startLoading, postsFetched } from "./slice";

const API_URL = `https://coders-network-api.onrender.com`;

export const fetchPosts = async (dispatch, getState) => {
  dispatch(startLoading());
  const response = await axios.get(`${API_URL}/posts`);
  const posts = response.data.rows;
  dispatch(postsFetched(posts));
};
