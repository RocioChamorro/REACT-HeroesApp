import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

const LoginScreen = () => {
  const navigate = useNavigate(); //Nos da una función que nos permite navegar a otras pantallas
  const { dispatch } = useContext(AuthContext)

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: {
        name: "Rocio del Pilar",
      },
    };
    dispatch(action);

    const lastPath = localStorage.getItem('lastPath') || '/marvel';
    const q = localStorage.getItem('q') ;

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
