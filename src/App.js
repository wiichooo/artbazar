import React, { useReducer, useState } from "react";

import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/login";
import { Router, Link } from "@reach/router";
import SignUp from "./components/signup";
import Store from "./components/store";
import Article from "./components/article";
import UserContext from "./context/userContext";

function App() {
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          {/* <div className="container"> */}
          <Link className="navbar-brand" to={"/"}>
            artbazar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              {user && !user.username ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/login"}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/signup"}>
                      Sign up
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={"/login"}
                    onClick={() => setUser({})}
                  >
                    Log Out
                  </Link>
                </li>
              )}
            </ul>
          </div>
          {/* </div> */}
        </nav>
        <Router>
          <Login path="/login"></Login>
          <SignUp path="/signup"></SignUp>
          <Store path="/"></Store>
          <Article path="/Article/:slugId"></Article>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
