import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authAction } from "../actions/authAction";
import Axios from "axios";

const Auth = () => {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();
  const handleAuth = () => {
    dispatch(authAction());
  };
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authLogin = () => {
    console.log(" i am in post auth login");
    console.log(username, password);
    Axios.post("https://ticketmaster-django.herokuapp.com/login/", {
      username: username,
      password: password,
    }).then(
      (response) => {
        console.log(response);
        dispatch(authAction(true, true, response.data.token));
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <div>
      <h2>{state.auth.token}</h2>
      <label>USERNAME</label>
      <input
        type="text"
        name="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <label>PASSWORD:</label>
      <input
        type="text"
        name="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleAuth} className="btn btn-info">
        {state.auth.isLoggedIn ? "Login" : "Logout"}
      </button>
      <button onClick={authLogin} className="btn btn-info">
        get token
      </button>
    </div>
  );
};

export default Auth;
