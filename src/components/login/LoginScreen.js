import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import useForm from "../../hooks/useForm";
import { types } from "../../types/types";

import heroImages from "../../assets/login/heroes.png"

const LoginScreen = () => {
  const title = {
    color: "black",
    fontFamily: "Rouge Script",
    fontSize: "100px",
    fontWeight: "normal",
    lineHeight: "48px",
    margin: "0 0 50px",
    textAlign: "center",
    textShadow: "#00CC00 1px 1px 2px",
  };
  const navigate = useNavigate(); //Nos da una función que nos permite navegar a otras pantallas
  const initialForm = {
    userName: "",
    email: "",
    password: "",
  };
  const { dispatch } = useContext(AuthContext);
  const [{ userName, email, password }, handleInputChange] =
    useForm(initialForm);

  const handleLogin = () => {
    if (userName == "" || email == "" || password == "") return;

    const action = {
      type: types.login,
      payload: {
        name: userName,
      },
    };
    dispatch(action);

    const lastPath = localStorage.getItem("lastPath") || "/marvel";

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="row">
      <div className="col-6">
        <img src={heroImages} className="heroes-loginImage" alt="heroes"/>
      </div>
      <div className="col-6">
        <div className="container mt-5">
          <h1 style={title}>HeroesApp</h1>
          <hr />
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">name</label>
              <input
                type="text"
                name="userName"
                value={userName}
                className="form-control"
                id="userName"
                onChange={handleInputChange}
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email1" onChange={handleInputChange}
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password1" onChange={handleInputChange}
              />
            </div>
            { (userName == "" || email == "" || password == "") ?
              <div className="alert alert-danger" role="alert">
                Ingresa todos los campos
              </div>: ''
            }
            <div className="d-grid gap-2 col-6 mx-auto text-center">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
