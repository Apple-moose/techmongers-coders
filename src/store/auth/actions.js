import axios from "axios";
import { startLoading, getToken, userLoggedIn } from "./slice";
// import { useNavigate } from "react-router-dom";

export function Login(email, password, navigate) {

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

    const tokenReceived = getState().auth.accessToken;

    axios
      .get("https://coders-network-api.onrender.com/me", {
        headers: { Authorization: `Bearer ${tokenReceived} ` },
      })
      .then((data) => {
        const userName = data.data.name;
        dispatch(startLoading());
        dispatch(userLoggedIn(userName));
        // Catch logged-in confirmation here!!!!
        //???for some reason call useNavigate on the loginPage???
        navigate("/");

      })
      .catch((err) => console.log("err", err));
  };
}

// export function LogInConfirmation(dispatch, getState) {

// const tokenReceived = getState().auth.accessToken;

// return function confirmLogIn(dispatch) {
//   //Fetch user data once token is registered....
//   // console.log("state of accessToken: ", tokenReceived);

// }};
