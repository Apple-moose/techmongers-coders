import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth } from "../store/auth/selectors";
import { userLogOut } from "../store/auth/slice";

export default function Toolbar() {
  const dispatch = useDispatch();
  const userName = useSelector(selectAuth);

  return (
    <div className="App-header">
      <h2 style={{ color: "white" }}>
        <Link to={"./."}>HOME</Link>
      </h2>
      <h2 style={{ color: "white" }}>
        {!userName.me ? (
          <Link to={"./login"}>login</Link>
        ) : (
          <>
            <h3>
              Welcome {userName.me} {""}
              <button onClick={() => dispatch(userLogOut())}>Log out!</button>
            </h3>
          </>
        )}
      </h2>
    </div>
  );
}
