import React, { useState } from "react";
import { Link } from "@reach/router";

function SignUp() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const Register = async (e) => {
    e.preventDefault();
    console.log(username, email, password);
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          email: email,
          password: password,
        },
      }),
    };
    const response = await fetch("http://localhost:3000/api/users", settings);
    console.log(response);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

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

          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={Register}
          >
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <Link to="/login">sign in?</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
