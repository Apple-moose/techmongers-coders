import React, { useEffect } from "react";
import moment from "moment";
import { fetchPosts } from "../store/postPage/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectPostPage } from "../store/postPage/selectors";

export default function postPage() {
  const dispatch = useDispatch();
  const post = useSelector(selectPostPage);

  useEffect(() => {
    dispatch(fetchPosts(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>Post Page!:</h1>
      {/* {!posts.length
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
      <button onClick={() => dispatch(fetchPosts)}>Load 5 more</button> */}
    </div>
  );
}
