import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NewPost } from "../store/userpost/actions";

export default function UserPostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(NewPost(title, content, navigate));
  }

  return (
    <>
      <div>
        <h1>New Post</h1>
        <form onSubmit={handleSubmit}>
          <p>
            <label>
              Title:{" "}
              <input
                type="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
          </p>
          <p>
            <label>
              Content:{" "}
              <input
                type="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </label>
          </p>
          <p>
            <button type="submit">Login</button>
          </p>
        </form>
      </div>
    </>
  );
}
