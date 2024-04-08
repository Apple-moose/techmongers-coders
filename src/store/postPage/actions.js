import axios from "axios";
import { startLoading } from "./slice";

const API_URL = `https://coders-network-api.onrender.com`;

export const fetchPosts = (id) => async (dispatch, getState) => {
    dispatch(startLoading());

    //The axios.get() method will return a promise.
    //The Promise.all() requires an array of promises.
    const [postResponse, commentsResponse] = await Promise.all([
        axios.get(`${API_URL}/posts/${id}`),
        axios.get(`${API_URL}/posts/${id}/comments`),])
  
    // const posts = response.data.rows;
    dispatch(fetchPosts(postResponse, commentsResponse));

  };
