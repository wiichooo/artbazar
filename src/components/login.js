import React, { useState, useContext } from "react";
import { navigate } from "@reach/router";
import userContext from "../context/userContext";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useContext(userContext);
  const [error, setError] = useState(false);

  const Login = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
        },
      }),
    };
    const response = await fetch(
      "http://localhost:3000/api/users/login",
      settings
    );
    const data = await response.json();
    if (response.ok) {
      setUser(data.user);
      console.log(data.user);
      setError(false);
      navigate("/");
    } else {
      console.log(data.errors);
      setError(true);
    }
  };

  return (
    <form>
      <h3>Sign In</h3>
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      {/* <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div> */}
      {error ? <label>Email or Password is invalid!</label> : null}
      <button
        type="submit"
        className="btn btn-primary btn-block"
        onClick={Login}
      >
        Submit
      </button>
      <p className="forgot-password text-right">Forgot password?</p>
    </form>
  );
}

export default Login;
