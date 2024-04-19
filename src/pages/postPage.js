import { useParams } from "react-router-dom";
import { useEffect } from "react";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { fetchPosts } from "../store/postPage/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectPostAndComments } from "../store/postPage/selectors";

export default function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(id));
  }, [dispatch, id]);

  const post = useSelector(selectPostAndComments);

  return (
    <div>
      {!post ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{post.post.title}</h1>
          <p className="meta">
            by: {post.post.developer.name} {""}
            {moment(post.post.createdAt).format("DD-MM-YYYY")} *{" "}
            {post.post.tags.map((p) => (
              <span className="greybox">{p.tag} </span>
            ))}
          </p>
          <ReactMarkdown children={post.post.content} />
          <h2>Comments</h2>
          <p>
            {" "}
            {post.comments.count === 0 ? (
              <p>No Comments so far!🤨</p>
            ) : (
              <>
                {post.comments.rows.map((c) => (
                  <span className="meta">{c.text} </span>
                ))}
              </>
            )}
          </p>
        </>
      )}
    </div>
  );
}
