import axios from "axios";
import { startLoading, getToken, userLoggedIn } from "./slice";
// A thunk creator
export function login(email, password) {
  // Return the thunk itself, i.e. a function
  return function thunk(dispatch, getState) {
    // make a POST API request to `/login`
    //default is kelley@codaisseur.com password:abcd
    dispatch(startLoading());
    axios
      .post("https://coders-network-api.onrender.com/login", {
        email: email,
        password: password,
      })
      .then((data) => {
        const token = data.data.jwt;
        dispatch(getToken(token));
      })
      .catch((err) => console.log("Login Error", err));

    //Fetch user data once token is registered....

    const tokenReceived = getState().auth.accessToken;

    // console.log("state of accessToken: ", tokenReceived);
    axios
      .get("https://coders-network-api.onrender.com/me", {
        headers: { Authorization: `Bearer ${tokenReceived} ` },
      })
      .then((data) => {
        const userName = data.data.name;
        dispatch(startLoading());
        dispatch(userLoggedIn(userName));
        // console.log("UserName: ", data.data.name);
      })
      .catch((err) => console.log("err", err));
  };
}
