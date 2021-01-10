import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authAction } from "../actions/authActions";
const Auth = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleAuth = () => {
    dispatch(authAction());
  };

  return (
    <div>
      <button onClick={handleAuth} className="btn btn-info">
        {state.auth.isLoggedIn ? "Login" : "Logout"}
      </button>
    </div>
  );
};

export default Auth;
