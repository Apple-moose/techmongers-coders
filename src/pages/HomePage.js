import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const API_URL = `https://coders-network-api.onrender.com`;

export default function HomePage() {
  const [data, setData] = useState({
    loading: true,
    posts: [],
  });

  async function fetchPosts() {
    setData({ ...data, loading: true });

    const response = await axios.get(`${API_URL}/posts`);
    const posts = response.data.rows;

    setData({
      loading: false,
      posts: posts,
    });
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts:</h1>
      {data.loading
        ? "LOADING"
        : data.posts.map((post) => (
            <p key={post.id}>
              <h2>{post.title}</h2>
              <p>
                {moment(post.updatedAt).format("DD-MM-YYYY")} *{" "}
                {post.tags.map((p) => (
                  <span className="greybox">{p.tag} </span>
                ))}
              </p>
            </p>
          ))}
    </div>
  );
}
