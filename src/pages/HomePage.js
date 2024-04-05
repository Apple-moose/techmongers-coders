import React, { useEffect, useState } from "react";
// import axios from "axios";
import moment from "moment";
import { fetchPosts } from "../store/feed/actions";
import { useDispatch, useSelector} from "react-redux";
import { selectFeedPosts } from "../store/feed/selectors";


export default function HomePage() {

const dispatch = useDispatch();
const posts = useSelector(selectFeedPosts);

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
              <h2>{post.title}</h2>
              <p>
                {moment(post.createdAt).format("DD-MM-YYYY")} *{" "}
                {post.tags.map((p) => (
                  <span className="greybox">{p.tag} </span>
                ))}
              </p>
            </p>
          ))}
    </div>
  );
}
