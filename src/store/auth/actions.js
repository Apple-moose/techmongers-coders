import axios from "axios";
import { startLoading, getToken, userLoggedIn } from "./slice";
import { newUserLogOut } from "../signup/slice";

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
        dispatch(newUserLogOut())
      })
      .catch((err) => console.log("Login Error", err));

    const tokenReceived = getState().auth.accessToken;
    localStorage.setItem("token", tokenReceived);
    console.log(localStorage);

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

export const bootstrapLogInState = () => async (dispatch) => {
  const tokenFromStorage = localStorage.getItem("token");

  if (!tokenFromStorage) return;

  axios
    .get("https://coders-network-api.onrender.com/me", {
      headers: { Authorization: `Bearer ${tokenFromStorage} ` },
    })
    .then((data) => {
      const userName = data.data.name;
      dispatch(userLoggedIn(userName));
    })
    .catch((err) => console.log("err", err));
};
