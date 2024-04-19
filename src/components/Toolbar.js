import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../store/auth/selectors";

export default function Toolbar() {
  const userName = useSelector(selectAuth);
  console.log(userName.me);
  return (
    <div className="App-header">
      <h2 style={{ color: "white" }}>
        <Link to={"./."}>HOME</Link>
      </h2>
      <h2 style={{ color: "white" }}>
        {!userName.me ? (
          <Link to={"./login"}>login</Link>
        ) : (
          <h3>Welcome {userName.me}</h3>
        )}
      </h2>
    </div>
  );
}
