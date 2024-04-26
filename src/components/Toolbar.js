import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth } from "../store/auth/selectors";
import { userLogOut } from "../store/auth/slice";
import { newUserLogOut } from "../store/signup/slice";
import { selectSignup} from "../store/signup/selectors";

export default function Toolbar() {
  const dispatch = useDispatch();
  const userName = useSelector(selectAuth);
  const newUserName = useSelector(selectSignup);

  return (
    <div className="App-header">
      <h2 style={{ color: "white" }}>
        <Link to={"./."}>HOME</Link>
      </h2>
      <h2 style={{ color: "white" }}>
        {!newUserName.me && !userName.me ? (
          <Link to={"./login"}>login</Link>
        ) : (
          <>
            <h3>
              Welcome {newUserName.me} {userName.me} {""}
              <button onClick={() => dispatch(userLogOut(), dispatch(newUserLogOut()))}>Log out!</button>
            </h3>
          </>
        )}
      </h2>
    </div>
  );
}
