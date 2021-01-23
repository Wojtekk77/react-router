import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authAction } from "../actions/authAction";
import Axios from "axios";

const Register = () => {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();
  const handleAuth = () => {
    dispatch(authAction());
  };
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");

  const authRegister = () => {
    console.log(" i am in post auth login");
    console.log(username, password, password2, email);
    Axios.post("https://ticketmaster-django.herokuapp.com/register/", {
      email: email,
      password: password,
      password2: password2,
      name: username,
    }).then(
      (response) => {
        console.log(response);
        // dispatch(authAction(true, true, response.data.token));
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <div>
      <h2>{state.auth.token}</h2>
      <label>EMAIL:</label>
      <input
        type="email"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
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
      <label>PASSWORD2:</label>
      <input
        type="text"
        name="password2"
        onChange={(e) => {
          setPassword2(e.target.value);
        }}
      />

      <button onClick={handleAuth} className="btn btn-info">
        {state.auth.isLoggedIn ? "Login" : "Logout"}
      </button>
      <button onClick={authRegister} className="btn btn-info">
        Register
      </button>
    </div>
  );
};

export default Register;
