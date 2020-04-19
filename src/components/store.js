import React, { useContext } from "react";
import userContext from "../context/userContext";

function Store() {
  const [user] = useContext(userContext);

  return <div>{user ? `Welcome ${user.username}` : "not user logged in"}</div>;
}

export default Store;
