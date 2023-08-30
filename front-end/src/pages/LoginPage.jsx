import React, { useState } from "react";
import { Link,redirect, useNavigate } from "react-router-dom";
import "../App.css";
import useToken from "../Hooks/useToken";
import {useUserContext} from "../context/UserContexts";
export default function Login() {
  const [token,setToken] = useToken();
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  
  const { login } = useUserContext();

  let navigate = useNavigate();
  let handleSubmit = (e) => {
    e.preventDefault();
    let dt = {
      email: emailValue,
      password: passwordValue,
    };
    fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify(dt),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.text())
      .then((data) => {
        // console.log(data);
        setToken(data);
        login(data);
        if(data){
         return navigate("/")
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h3>Login</h3>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
        </div>
        <button
          className="btn"
          type="submit"
          disabled={!emailValue || !passwordValue}
        >
          Login
        </button>{" "}
        <button className="btn" type="reset">
          Reset Password
        </button>{" "}
        <Link to="/signup">
          <button className="btn" type="button">
            Don't have Account Signup
          </button>
        </Link>
      </form>
    </>
  );
}
