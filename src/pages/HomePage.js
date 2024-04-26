import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { fetchPosts } from "../store/feed/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectFeedPosts } from "../store/feed/selectors";

export default function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector(selectFeedPosts);

  // REMOVE <ReactStrictMode> in index.js to stop rendering twice!!!

  useEffect(() => {
    dispatch(fetchPosts);
  }, [dispatch]);

  return (
    <div>
      <h1>Posts:</h1>
      {/* {posts.loading */}
      {!posts.length
        ? "LOADING"
        : posts.map((post) => (
            <p key={post.id}>
              <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
              <p>
                {moment(post.createdAt).format("DD-MM-YYYY")} *{" "}
                {post.tags.map((p) => (
                  <span key={p.id} className="greybox">{p.tag} </span>
                ))}
              </p>
            </p>
          ))}
      <button onClick={() => dispatch(fetchPosts)}>Load 5 more</button>
    </div>
  );
}
