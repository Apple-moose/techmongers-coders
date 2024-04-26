import axios from "axios";
import { startLoading, getToken, userLoggedIn } from "./slice";
import { userLogOut } from "./slice";

export function NewPost(title, content, navigate) {
  const API_URL = "https://coders-network-api.onrender.com";

  return function thunk(dispatch, getState) {
    dispatch(startLoading());
    axios
      .post(
        API_URL + "/posts",
        {
          title: title,
          content: content,
        },
        {
          headers: { Authorization: `Bearer ${tokenReceived} ` },
        }
      )
      .then((data) => {
        const token = data.data.jwt;
        dispatch(getToken(token));
        dispatch(userLogOut());
      })
      .catch((err) => console.log("New Posting Error", err));

    const tokenReceived = getState().signup.accessToken;
    localStorage.setItem("tokenNew", tokenReceived);
    console.log("tokenNew is: ", localStorage);

    axios
      .get("https://coders-network-api.onrender.com/me", {
        headers: { Authorization: `Bearer ${tokenReceived} ` },
      })
      .then((data) => {
        const userName = data.data.name;
        dispatch(startLoading());
        dispatch(userLoggedIn(userName));
        navigate("/");
      })
      .catch((err) => console.log("err", err));
  };
}

// export const bootstrapNewLogInState = () => async (dispatch) => {
//   const tokenFromStorage = localStorage.getItem("tokenNew");

//   if (!tokenFromStorage) return;

//   axios
//     .get("https://coders-network-api.onrender.com/me", {
//       headers: { Authorization: `Bearer ${tokenFromStorage} ` },
//     })
//     .then((data) => {
//       const userName = data.data.name;
//       dispatch(userLoggedIn(userName));
//     })
//     .catch((err) => console.log("err", err));
// };
